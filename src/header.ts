import Common from 'ethereumjs-common'
import * as utils from 'ethereumjs-util'
import { BN } from 'ethereumjs-util'
import {
  Blockchain,
  BlockHeaderData,
  BufferLike,
  NetworkOptions,
  NoReturnValueCallback,
  PrefixedHexString,
} from './types'
import { Buffer } from 'buffer'
import { Block } from './block'

/**
 * An object that repersents the block header
 * @constructor
 * @param {Array} data raw data, deserialized
 * @param {Array} opts Options
 * @param {String|Number} opts.chain The chain for the block header [default: 'mainnet']
 * @param {String} opts.hardfork Hardfork for the block header [default: null, block number-based behaviour]
 * @param {Object} opts.common Alternatively pass a Common instance instead of setting chain/hardfork directly
 * @prop {Buffer} parentHash the blocks' parent's hash
 * @prop {Buffer} uncleHash sha3(rlp_encode(uncle_list))
 * @prop {Buffer} coinbase the miner address
 * @prop {Buffer} stateRoot The root of a Merkle Patricia tree
 * @prop {Buffer} transactionTrie the root of a Trie containing the transactions
 * @prop {Buffer} receiptTrie the root of a Trie containing the transaction Reciept
 * @prop {Buffer} bloom
 * @prop {Buffer} difficulty
 * @prop {Buffer} number the block's height
 * @prop {Buffer} gasLimit
 * @prop {Buffer} gasUsed
 * @prop {Buffer} timestamp
 * @prop {Buffer} extraData
 * @prop {Array.<Buffer>} raw an array of buffers containing the raw blocks.
 */
export class BlockHeader {
  public raw!: Buffer[]
  public parentHash!: Buffer
  public uncleHash!: Buffer
  public coinbase!: Buffer
  public stateRoot!: Buffer
  public transactionsTrie!: Buffer
  public receiptTrie!: Buffer
  public bloom!: Buffer
  public difficulty!: Buffer
  public number!: Buffer
  public gasLimit!: Buffer
  public gasUsed!: Buffer
  public timestamp!: Buffer
  public extraData!: Buffer
  public mixHash!: Buffer
  public nonce!: Buffer

  private readonly _common: Common

  constructor(
    data: Buffer | PrefixedHexString | BufferLike[] | BlockHeaderData = {},
    opts: NetworkOptions = {},
  ) {
    if (opts.common !== undefined) {
      if (opts.chain !== undefined || opts.hardfork !== undefined) {
        throw new Error(
          'Instantiation with both opts.common and opts.chain / opts.hardfork parameter not allowed!',
        )
      }

      this._common = opts.common
    } else {
      const chain = opts.chain ? opts.chain : 'mainnet'
      const hardfork = opts.hardfork ? opts.hardfork : null
      this._common = new Common(chain, hardfork)
    }

    const fields = [
      {
        name: 'parentHash',
        length: 32,
        default: utils.zeros(32),
      },
      {
        name: 'uncleHash',
        default: utils.KECCAK256_RLP_ARRAY,
      },
      {
        name: 'coinbase',
        length: 20,
        default: utils.zeros(20),
      },
      {
        name: 'stateRoot',
        length: 32,
        default: utils.zeros(32),
      },
      {
        name: 'transactionsTrie',
        length: 32,
        default: utils.KECCAK256_RLP,
      },
      {
        name: 'receiptTrie',
        length: 32,
        default: utils.KECCAK256_RLP,
      },
      {
        name: 'bloom',
        default: utils.zeros(256),
      },
      {
        name: 'difficulty',
        default: Buffer.from([]),
      },
      {
        name: 'number',
        // TODO: params.homeSteadForkNumber.v left for legacy reasons, replace on future release
        default: utils.toBuffer(1150000),
      },
      {
        name: 'gasLimit',
        default: Buffer.from('ffffffffffffff', 'hex'),
      },
      {
        name: 'gasUsed',
        empty: true,
        default: Buffer.from([]),
      },
      {
        name: 'timestamp',
        default: Buffer.from([]),
      },
      {
        name: 'extraData',
        allowZero: true,
        empty: true,
        default: Buffer.from([]),
      },
      {
        name: 'mixHash',
        default: utils.zeros(32),
        // length: 32
      },
      {
        name: 'nonce',
        default: utils.zeros(8), // sha3(42)
      },
    ]
    utils.defineProperties(this, fields, data)
  }

  /**
   * Returns the canoncical difficulty of the block
   * @method canonicalDifficulty
   * @param {Block} parentBlock the parent `Block` of the this header
   * @return {BN}
   */
  canonicalDifficulty(parentBlock: Block): BN {
    const hardfork = this._getHardfork()
    const blockTs = new BN(this.timestamp)
    const parentTs = new BN(parentBlock.header.timestamp)
    const parentDif = new BN(parentBlock.header.difficulty)
    const minimumDifficulty = new BN(this._common.param('pow', 'minimumDifficulty', hardfork))
    const offset = parentDif.div(
      new BN(this._common.param('pow', 'difficultyBoundDivisor', hardfork)),
    )
    let num = new BN(this.number)

    // We use a ! here as TS can follow this hardforks-dependent logic, but it always gets assigned
    let dif!: BN

    if (this._common.hardforkGteHardfork(hardfork, 'byzantium')) {
      // max((2 if len(parent.uncles) else 1) - ((timestamp - parent.timestamp) // 9), -99) (EIP100)
      const uncleAddend = parentBlock.header.uncleHash.equals(utils.KECCAK256_RLP_ARRAY) ? 1 : 2
      let a = blockTs
        .sub(parentTs)
        .idivn(9)
        .ineg()
        .iaddn(uncleAddend)
      const cutoff = new BN(-99)
      // MAX(cutoff, a)
      if (cutoff.cmp(a) === 1) {
        a = cutoff
      }
      dif = parentDif.add(offset.mul(a))
    }

    if (this._common.hardforkGteHardfork(hardfork, 'constantinople')) {
      // Constantinople difficulty bomb delay (EIP1234)
      num.isubn(5000000)
      if (num.ltn(0)) {
        num = new BN(0)
      }
    } else if (this._common.hardforkGteHardfork(hardfork, 'byzantium')) {
      // Byzantium difficulty bomb delay (EIP649)
      num.isubn(3000000)
      if (num.ltn(0)) {
        num = new BN(0)
      }
    } else if (this._common.hardforkGteHardfork(hardfork, 'homestead')) {
      // 1 - (block_timestamp - parent_timestamp) // 10
      let a = blockTs
        .sub(parentTs)
        .idivn(10)
        .ineg()
        .iaddn(1)
      const cutoff = new BN(-99)
      // MAX(cutoff, a)
      if (cutoff.cmp(a) === 1) {
        a = cutoff
      }
      dif = parentDif.add(offset.mul(a))
    } else {
      // pre-homestead
      if (parentTs.addn(this._common.param('pow', 'durationLimit', hardfork)).cmp(blockTs) === 1) {
        dif = offset.add(parentDif)
      } else {
        dif = parentDif.sub(offset)
      }
    }

    const exp = num.idivn(100000).isubn(2)
    if (!exp.isNeg()) {
      dif.iadd(new BN(2).pow(exp))
    }

    if (dif.cmp(minimumDifficulty) === -1) {
      dif = minimumDifficulty
    }

    return dif
  }

  /**
   * checks that the block's `difficuly` matches the canonical difficulty
   * @method validateDifficulty
   * @param {Block} parentBlock this block's parent
   * @return {Boolean}
   */
  validateDifficulty(parentBlock: Block): boolean {
    const dif = this.canonicalDifficulty(parentBlock)
    return dif.cmp(new BN(this.difficulty)) === 0
  }

  /**
   * Validates the gasLimit
   * @method validateGasLimit
   * @param {Block} parentBlock this block's parent
   * @returns {Boolean}
   */
  validateGasLimit(parentBlock: Block): boolean {
    const pGasLimit = new BN(parentBlock.header.gasLimit)
    const gasLimit = new BN(this.gasLimit)
    const hardfork = this._getHardfork()

    const a = pGasLimit.div(
      new BN(this._common.param('gasConfig', 'gasLimitBoundDivisor', hardfork)),
    )
    const maxGasLimit = pGasLimit.add(a)
    const minGasLimit = pGasLimit.sub(a)

    return (
      gasLimit.lt(maxGasLimit) &&
      gasLimit.gt(minGasLimit) &&
      gasLimit.gte(this._common.param('gasConfig', 'minGasLimit', hardfork))
    )
  }

  /**
   * Validates the entire block header
   * @method validate
   * @param {Blockchain} blockChain the blockchain that this block is validating against
   * @param {Bignum} [height] if this is an uncle header, this is the height of the block that is including it
   * @param {Function} cb the callback function. The callback is given an `error` if the block is invalid
   */
  validate(blockchain: Blockchain, cb: NoReturnValueCallback): void
  validate(blockchain: Blockchain, height: BN, cb: NoReturnValueCallback): void
  validate(
    blockchain: Blockchain,
    heightOrCb: BN | NoReturnValueCallback,
    cb?: NoReturnValueCallback,
  ): void {
    if (heightOrCb instanceof Function) {
      cb = heightOrCb
    }

    if (cb === undefined) {
      throw new Error('No callback provided')
    }

    const callback = cb

    if (this.isGenesis()) {
      return callback(null)
    }

    // find the blocks parent
    blockchain.getBlock(this.parentHash, (err, parentBlock) => {
      if (err || parentBlock === undefined) {
        return callback(new Error('could not find parent block'))
      }

      const number = new BN(this.number)
      if (number.cmp(new BN(parentBlock.header.number).iaddn(1)) !== 0) {
        return callback(new Error('invalid number'))
      }

      if (BN.isBN(heightOrCb)) {
        const dif = heightOrCb.sub(new BN(parentBlock.header.number))
        if (!(dif.cmpn(8) === -1 && dif.cmpn(1) === 1)) {
          return callback(new Error('uncle block has a parent that is too old or to young'))
        }
      }

      if (!this.validateDifficulty(parentBlock)) {
        return callback(new Error('invalid Difficulty'))
      }

      if (!this.validateGasLimit(parentBlock)) {
        return callback(new Error('invalid gas limit'))
      }

      if (utils.bufferToInt(parentBlock.header.number) + 1 !== utils.bufferToInt(this.number)) {
        return callback(new Error('invalid heigth'))
      }

      if (utils.bufferToInt(this.timestamp) <= utils.bufferToInt(parentBlock.header.timestamp)) {
        return callback(new Error('invalid timestamp'))
      }

      const hardfork = this._getHardfork()
      if (this.extraData.length > this._common.param('vm', 'maxExtraDataSize', hardfork)) {
        return callback(new Error('invalid amount of extra data'))
      }

      callback(null)
    })
  }

  /**
   * Returns the sha3 hash of the blockheader
   * @method hash
   * @return {Buffer}
   */
  hash(): Buffer {
    return utils.rlphash(this.raw)
  }

  /**
   * checks if the blockheader is a genesis header
   * @method isGenesis
   * @return {Boolean}
   */
  isGenesis(): boolean {
    return this.number.length === 0
  }

  /**
   * turns the header into the canonical genesis block header
   * @method setGenesisParams
   */
  setGenesisParams(): void {
    this.timestamp = this._common.genesis().timestamp
    this.gasLimit = this._common.genesis().gasLimit
    this.difficulty = this._common.genesis().difficulty
    this.extraData = this._common.genesis().extraData
    this.nonce = this._common.genesis().nonce
    this.stateRoot = this._common.genesis().stateRoot
    this.number = Buffer.from([])
  }

  /**
   * Returns the rlp encoding of the block header
   */
  serialize(): Buffer {
    // Note: This never gets executed, defineProperties overwrites it.
    return Buffer.from([])
  }

  /**
   * Returns the block header in JSON format
   * @see {@link https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md#defineproperties|ethereumjs-util}
   */
  toJSON(_labels: boolean = false): { [key: string]: string } | string[] {
    // Note: This never gets executed, defineProperties overwrites it.
    return {}
  }

  private _getHardfork(): string {
    const commonHardFork = this._common.hardfork()

    return commonHardFork !== null
      ? commonHardFork
      : this._common.activeHardfork(utils.bufferToInt(this.number))
  }
}
