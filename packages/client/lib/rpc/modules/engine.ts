import { Block, HeaderData } from '@ethereumjs/block'
import { TransactionFactory, TypedTransaction } from '@ethereumjs/tx'
import { toBuffer, bufferToHex, rlp, BN } from 'ethereumjs-util'
import { BaseTrie as Trie } from 'merkle-patricia-tree'
import { Hardfork } from '@ethereumjs/common'

import { middleware, validators } from '../validation'
import { INTERNAL_ERROR, INVALID_PARAMS } from '../error-code'
import { PendingBlock } from '../../miner'
import type VM from '@ethereumjs/vm'
import type EthereumClient from '../../client'
import type { Chain } from '../../blockchain'
import type { VMExecution } from '../../execution'
import type { Config } from '../../config'
import type { EthereumService } from '../../service'
import type { FullSynchronizer } from '../../sync'
import type { TxPool } from '../../sync/txpool'

enum Status {
  ACCEPTED = 'ACCEPTED',
  INVALID = 'INVALID',
  INVALID_BLOCK_HASH = 'INVALID_BLOCK_HASH',
  INVALID_TERMINAL_BLOCK = 'INVALID_TERMINAL_BLOCK',
  SYNCING = 'SYNCING',
  VALID = 'VALID',
}

type ExecutionPayloadV1 = {
  parentHash: string // DATA, 32 Bytes
  feeRecipient: string // DATA, 20 Bytes
  stateRoot: string // DATA, 32 Bytes
  receiptsRoot: string // DATA, 32 bytes
  logsBloom: string // DATA, 256 Bytes
  prevRandao: string // DATA, 32 Bytes
  blockNumber: string // QUANTITY, 64 Bits
  gasLimit: string // QUANTITY, 64 Bits
  gasUsed: string // QUANTITY, 64 Bits
  timestamp: string // QUANTITY, 64 Bits
  extraData: string // DATA, 0 to 32 Bytes
  baseFeePerGas: string // QUANTITY, 256 Bits
  blockHash: string // DATA, 32 Bytes
  transactions: string[] // Array of DATA - Array of transaction objects,
  // each object is a byte list (DATA) representing
  // TransactionType || TransactionPayload or LegacyTransaction
  // as defined in EIP-2718.
}

type ForkchoiceStateV1 = {
  headBlockHash: string
  safeBlockHash: string
  finalizedBlockHash: string
}

type PayloadAttributesV1 = {
  timestamp: string
  prevRandao: string
  suggestedFeeRecipient: string
}

type PayloadStatusV1 = {
  status: Status
  latestValidHash: string | null
  validationError: string | null
}

type ForkchoiceResponseV1 = {
  payloadStatus: PayloadStatusV1
  payloadId: string | null
}

type TransitionConfigurationV1 = {
  terminalTotalDifficulty: string
  terminalBlockHash: string
  terminalBlockNumber: string
}

const EngineError = {
  UnknownPayload: {
    code: -32001,
    message: 'Unknown payload',
  },
}

/**
 * Formats a block to {@link ExecutionPayload}.
 */
const blockToExecutionPayload = (block: Block) => {
  const header = block.toJSON().header!
  const transactions = block.transactions.map((tx) => bufferToHex(tx.serialize())) ?? []
  const payload: ExecutionPayloadV1 = {
    blockNumber: header.number!,
    parentHash: header.parentHash!,
    feeRecipient: header.coinbase!,
    stateRoot: header.stateRoot!,
    receiptsRoot: header.receiptTrie!,
    logsBloom: header.logsBloom!,
    gasLimit: header.gasLimit!,
    gasUsed: header.gasUsed!,
    timestamp: header.timestamp!,
    extraData: header.extraData!,
    baseFeePerGas: header.baseFeePerGas!,
    blockHash: bufferToHex(block.hash()),
    prevRandao: header.mixHash!,
    transactions,
  }
  return payload
}

/**
 * Searches for a block in {@link ValidBlocks} then the blockchain.
 */
const findBlock = async (hash: Buffer, validBlocks: ValidBlocks, chain: Chain) => {
  const parentBlock = validBlocks.get(hash.toString('hex'))
  if (parentBlock) {
    return parentBlock
  } else {
    // search in chain
    return await chain.getBlock(hash)
  }
}

/**
 * Recursively finds parent blocks starting from the parentHash.
 */
const recursivelyFindParents = async (
  vmHeadHash: Buffer,
  parentHash: Buffer,
  validBlocks: ValidBlocks,
  chain: Chain
) => {
  if (parentHash.equals(vmHeadHash) || parentHash.equals(Buffer.alloc(32))) {
    return []
  }
  const parentBlocks = []
  const block = await findBlock(parentHash, validBlocks, chain)
  parentBlocks.push(block)
  while (!parentBlocks[parentBlocks.length - 1].hash().equals(parentHash)) {
    const block: Block = await findBlock(
      parentBlocks[parentBlocks.length - 1].header.parentHash,
      validBlocks,
      chain
    )
    parentBlocks.push(block)
  }
  return parentBlocks.reverse()
}

/**
 * Returns the txs trie root for the block.
 */
const txsTrieRoot = async (txs: TypedTransaction[]) => {
  const trie = new Trie()
  for (const [i, tx] of txs.entries()) {
    await trie.put(rlp.encode(i), tx.serialize())
  }
  return trie.root
}

/**
 * Returns the block hash as a 0x-prefixed hex string if found valid in validBlocks or the blockchain, otherwise returns null.
 */
const validHash = async (
  hash: Buffer,
  validBlocks: ValidBlocks,
  chain: Chain
): Promise<string | null> => {
  if (validBlocks.get(hash.toString('hex'))) {
    return bufferToHex(hash)
  }
  try {
    await chain.getBlock(hash)
  } catch (error: any) {
    return null
  }
  return bufferToHex(hash)
}

/**
 *  Validate that the block satisfies post-merge conditions.
 */
const validateTerminalBlock = async (block: Block, chain: Chain): Promise<boolean> => {
  const hf = chain.config.chainCommon.hardforks().find((h) => h.name === Hardfork.Merge)
  if (hf === undefined || hf.td === undefined || hf.td === null) return false
  const ttd = new BN(hf.td)
  const blockTd = await chain.getTd(block.hash(), block.header.number)

  // Block is terminal if its td >= ttd and its parent td < ttd.
  // In case the Genesis block has td >= ttd it is the terminal block
  if (block.isGenesis()) return blockTd.gte(ttd)

  const parentBlockTd = await chain.getTd(block.header.parentHash, block.header.number.subn(1))
  return blockTd.gte(ttd) && parentBlockTd.lt(ttd)
}

type UnprefixedBlockHash = string
type ValidBlocks = Map<UnprefixedBlockHash, Block>

/**
 * engine_* RPC module
 * @memberof module:rpc/modules
 */
export class Engine {
  private client: EthereumClient
  private execution: VMExecution
  private service: EthereumService
  private chain: Chain
  private config: Config
  private synchronizer: FullSynchronizer
  private vm: VM
  private txPool: TxPool
  private pendingBlock: PendingBlock
  private validBlocks: ValidBlocks
  private lastMessageID = new BN(0)

  /**
   * Create engine_* RPC module
   * @param client Client to which the module binds
   */
  constructor(client: EthereumClient) {
    this.client = client
    this.service = client.services.find((s) => s.name === 'eth') as EthereumService
    this.chain = this.service.chain
    this.config = this.chain.config
    this.synchronizer = this.service.synchronizer as FullSynchronizer
    if (!this.client.execution) {
      throw Error('execution required for engine module')
    }
    this.execution = this.client.execution
    this.vm = this.client.execution.vm
    this.txPool = (this.service.synchronizer as FullSynchronizer).txPool
    this.pendingBlock = new PendingBlock({ config: this.config, txPool: this.txPool })
    this.validBlocks = new Map()

    this.newPayloadV1 = middleware(this.newPayloadV1.bind(this), 1, [
      [
        validators.object({
          parentHash: validators.blockHash,
          feeRecipient: validators.address,
          stateRoot: validators.hex,
          receiptsRoot: validators.hex,
          logsBloom: validators.hex,
          prevRandao: validators.hex,
          blockNumber: validators.hex,
          gasLimit: validators.hex,
          gasUsed: validators.hex,
          timestamp: validators.hex,
          extraData: validators.hex,
          baseFeePerGas: validators.hex,
          blockHash: validators.blockHash,
          transactions: validators.array(validators.hex),
        }),
      ],
    ])

    this.forkchoiceUpdatedV1 = middleware(this.forkchoiceUpdatedV1.bind(this), 1, [
      [
        validators.object({
          headBlockHash: validators.blockHash,
          safeBlockHash: validators.blockHash,
          finalizedBlockHash: validators.blockHash,
        }),
      ],
      [
        validators.optional(
          validators.object({
            timestamp: validators.hex,
            prevRandao: validators.hex,
            suggestedFeeRecipient: validators.address,
          })
        ),
      ],
    ])

    this.getPayloadV1 = middleware(this.getPayloadV1.bind(this), 1, [[validators.hex]])

    this.exchangeTransitionConfigurationV1 = middleware(
      this.exchangeTransitionConfigurationV1.bind(this),
      1,
      [
        [
          validators.object({
            terminalTotalDifficulty: validators.hex,
            terminalBlockHash: validators.hex,
            terminalBlockNumber: validators.hex,
          }),
        ],
      ]
    )
  }

  /**
   * Verifies the payload according to the execution environment
   * rule set (EIP-3675) and returns the status of the verification.
   *
   * @param params An array of one parameter:
   *   1. An object as an instance of {@link ExecutionPayloadV1}
   * @returns An object of shape {@link PayloadStatusV1}:
   *   1. status: String - the result of the payload execution
   *        VALID - given payload is valid
   *        INVALID - given payload is invalid
   *        SYNCING - sync process is in progress
   *        ACCEPTED - blockHash is valid, doesn't extend the canonical chain, hasn't been fully validated
   *        INVALID_BLOCK_HASH - blockHash validation failed
   *        INVALID_TERMINAL_BLOCK - block fails transition block validity
   *   2. latestValidHash: DATA|null - the hash of the most recent
   *      valid block in the branch defined by payload and its ancestors
   *   3. validationError: String|null - validation error message
   */
  async newPayloadV1(params: [ExecutionPayloadV1]): Promise<PayloadStatusV1> {
    const [payloadData] = params
    const {
      blockNumber: number,
      receiptsRoot: receiptTrie,
      prevRandao: mixHash,
      feeRecipient: coinbase,
      transactions,
      parentHash,
    } = payloadData
    const common = this.config.chainCommon

    try {
      const block = await findBlock(toBuffer(parentHash), this.validBlocks, this.chain)
      if (!block._common.gteHardfork(Hardfork.Merge)) {
        const validTerminalBlock = await validateTerminalBlock(block, this.chain)
        if (!validTerminalBlock) {
          return {
            status: Status.INVALID_TERMINAL_BLOCK,
            validationError: null,
            latestValidHash: null,
          }
        }
      }
    } catch (error: any) {
      // TODO if we can't find the parent and the block doesn't extend the canonical chain,
      // return ACCEPTED when optimistic sync is supported to store the block for later processing
      return { status: Status.SYNCING, validationError: null, latestValidHash: null }
    }

    const txs = []
    for (const [index, serializedTx] of transactions.entries()) {
      try {
        const tx = TransactionFactory.fromSerializedData(toBuffer(serializedTx), { common })
        txs.push(tx)
      } catch (error) {
        const validationError = `Invalid tx at index ${index}: ${error}`
        this.config.logger.error(validationError)
        const latestValidHash = await validHash(
          toBuffer(payloadData.parentHash),
          this.validBlocks,
          this.chain
        )
        return { status: Status.INVALID, latestValidHash, validationError }
      }
    }

    const transactionsTrie = await txsTrieRoot(txs)
    const header: HeaderData = {
      ...payloadData,
      number,
      receiptTrie,
      transactionsTrie,
      mixHash,
      coinbase,
    }

    let block
    try {
      block = Block.fromBlockData({ header, transactions: txs }, { common })

      // Verify blockHash matches payload
      if (!block.hash().equals(toBuffer(payloadData.blockHash))) {
        const validationError = `Invalid blockHash, expected: ${
          payloadData.blockHash
        }, received: ${bufferToHex(block.hash())}`
        this.config.logger.debug(validationError)
        const latestValidHash = await validHash(
          toBuffer(header.parentHash),
          this.validBlocks,
          this.chain
        )
        return { status: Status.INVALID_BLOCK_HASH, latestValidHash, validationError }
      }
    } catch (error) {
      const validationError = `Error verifying block during init: ${error}`
      this.config.logger.debug(validationError)
      const latestValidHash = await validHash(
        toBuffer(header.parentHash),
        this.validBlocks,
        this.chain
      )
      return { status: Status.INVALID, latestValidHash, validationError }
    }

    const vmCopy = this.vm.copy()
    const vmHead = this.chain.headers.latest!
    let blocks: Block[]
    try {
      blocks = await recursivelyFindParents(
        vmHead.hash(),
        block.header.parentHash,
        this.validBlocks,
        this.chain
      )
    } catch (error) {
      return { status: Status.SYNCING, latestValidHash: null, validationError: null }
    }

    blocks.push(block)

    try {
      for (const [i, block] of blocks.entries()) {
        const root = (i > 0 ? blocks[i - 1] : await this.chain.getBlock(block.header.parentHash))
          .header.stateRoot
        await vmCopy.runBlock({ block, root })
        await vmCopy.blockchain.putBlock(block)
      }
    } catch (error) {
      const validationError = `Error verifying block while running: ${error}`
      this.config.logger.debug(validationError)
      const latestValidHash = await validHash(block.header.parentHash, this.validBlocks, this.chain)
      return { status: Status.INVALID, latestValidHash, validationError }
    }

    this.validBlocks.set(block.hash().toString('hex'), block)
    return {
      status: Status.VALID,
      latestValidHash: bufferToHex(block.hash()),
      validationError: null,
    }
  }

  /**
   * Propagates the change in the fork choice to the execution client.
   *
   * @param params An array of one parameter:
   *   1. An object - The state of the fork choice:
   *        headBlockHash - block hash of the head of the canonical chain
   *        safeBlockHash - the "safe" block hash of the canonical chain under certain synchrony
   *         and honesty assumptions. This value MUST be either equal to or an ancestor of headBlockHash
   *        finalizedBlockHash - block hash of the most recent finalized block
   *   2. An object or null - instance of {@link PayloadAttributesV1}
   * @returns An object:
   *   1. payloadStatus: {@link PayloadStatusV1}; values of the `status` field in the context of this method are restricted to the following subset::
   *        VALID
   *        INVALID
   *        SYNCING
   *        INVALID_TERMINAL_BLOCK
   *   2. payloadId: DATA|null - 8 Bytes - identifier of the payload build process or `null`
   */
  async forkchoiceUpdatedV1(
    params: [forkchoiceState: ForkchoiceStateV1, payloadAttributes: PayloadAttributesV1 | undefined]
  ): Promise<ForkchoiceResponseV1> {
    const { headBlockHash, finalizedBlockHash } = params[0]
    const payloadAttributes = params[1]

    /*
     * Process head block
     */
    let headBlock = this.validBlocks.get(headBlockHash.slice(2))
    if (!headBlock) {
      // In case this request was not received sequentially,
      // the block may already be in the blockchain.
      try {
        headBlock = await this.chain.getBlock(toBuffer(headBlockHash))
      } catch (error) {
        const latestValidHash = bufferToHex(this.chain.headers.latest!.hash())
        const payloadStatus = { status: Status.SYNCING, latestValidHash, validationError: null }
        return { payloadStatus, payloadId: null }
      }
    }

    if (!headBlock._common.gteHardfork(Hardfork.Merge)) {
      const validTerminalBlock = await validateTerminalBlock(headBlock, this.chain)
      if (!validTerminalBlock) {
        return {
          payloadStatus: {
            status: Status.INVALID_TERMINAL_BLOCK,
            validationError: null,
            latestValidHash: null,
          },
          payloadId: null,
        }
      }
    }

    const vmHeadHash = this.chain.headers.latest!.hash()
    if (!vmHeadHash.equals(headBlock.hash())) {
      let parentBlocks
      try {
        parentBlocks = await recursivelyFindParents(
          vmHeadHash,
          headBlock.header.parentHash,
          this.validBlocks,
          this.chain
        )
      } catch (error) {
        const latestValidHash = await validHash(
          headBlock.header.parentHash,
          this.validBlocks,
          this.chain
        )
        const payloadStatus = { status: Status.SYNCING, latestValidHash, validationError: null }
        return { payloadStatus, payloadId: null }
      }

      const blocks = [...parentBlocks, headBlock]
      await this.chain.putBlocks(blocks, true)
      await this.execution.run()
      this.synchronizer.checkTxPoolState()
      this.txPool.removeNewBlockTxs(blocks)

      for (const block of blocks) {
        this.validBlocks.delete(block.hash().toString('hex'))
      }

      if (
        !this.synchronizer.syncTargetHeight ||
        this.synchronizer.syncTargetHeight.lt(headBlock.header.number)
      ) {
        this.config.synchronized = true
        this.config.lastSyncDate = Date.now()
        this.synchronizer.syncTargetHeight = headBlock.header.number
      }
    }

    /*
     * Process finalized block
     */
    if (finalizedBlockHash === '0'.repeat(64)) {
      // All zeros means no finalized block yet which is okay
    } else {
      this.chain.lastFinalizedBlockHash = toBuffer(finalizedBlockHash)
    }

    /*
     * If payloadAttributes is present, start building block and return payloadId
     */
    if (payloadAttributes) {
      const { timestamp, prevRandao, suggestedFeeRecipient } = payloadAttributes
      const parentBlock = this.chain.blocks.latest!
      const payloadId = await this.pendingBlock.start(this.vm.copy(), parentBlock, {
        timestamp,
        mixHash: prevRandao,
        coinbase: suggestedFeeRecipient,
      })
      const latestValidHash = await validHash(
        headBlock.header.parentHash,
        this.validBlocks,
        this.chain
      )
      const payloadStatus = { status: Status.VALID, latestValidHash, validationError: null }
      return { payloadStatus, payloadId: bufferToHex(payloadId) }
    }

    const latestValidHash = await validHash(
      headBlock.header.parentHash,
      this.validBlocks,
      this.chain
    )
    const payloadStatus = { status: Status.VALID, latestValidHash, validationError: null }
    return { payloadStatus, payloadId: null }
  }

  /**
   * Given payloadId, returns the most recent version of an execution payload
   * that is available by the time of the call or responds with an error.
   *
   * @param params An array of one parameter:
   *   1. payloadId: DATA, 8 bytes - identifier of the payload building process
   * @returns Instance of {@link ExecutionPayloadV1} or an error
   */
  async getPayloadV1(params: [string]) {
    const payloadId = toBuffer(params[0])
    try {
      const block = await this.pendingBlock.build(payloadId)
      if (!block) {
        throw EngineError.UnknownPayload
      }
      this.validBlocks.set(block.hash().toString('hex'), block)
      return blockToExecutionPayload(block)
    } catch (error: any) {
      if (error === EngineError.UnknownPayload) throw error
      throw {
        code: INTERNAL_ERROR,
        message: error.message ?? error,
      }
    }
  }

  /**
   * Compare transition configuration parameters.
   *
   * @param params An array of one parameter:
   *   1. transitionConfiguration: Object - instance of {@link TransitionConfigurationV1}
   * @returns Instance of {@link TransitionConfigurationV1} or an error
   */
  async exchangeTransitionConfigurationV1(
    params: [TransitionConfigurationV1]
  ): Promise<TransitionConfigurationV1> {
    const { terminalTotalDifficulty, terminalBlockHash, terminalBlockNumber } = params[0]
    const { td } = this.config.chainCommon.hardforks().find((h) => h.name === Hardfork.Merge)!
    if (td !== parseInt(terminalTotalDifficulty)) {
      throw {
        code: INVALID_PARAMS,
        message: `terminalTotalDifficulty set to ${td}, received ${parseInt(
          terminalTotalDifficulty
        )}`,
      }
    }
    // Note: our client does not yet support block whitelisting (terminalBlockHash/terminalBlockNumber)
    // since we are not yet fast enough to run along tip-of-chain mainnet execution
    return { terminalTotalDifficulty, terminalBlockHash, terminalBlockNumber }
  }
}
