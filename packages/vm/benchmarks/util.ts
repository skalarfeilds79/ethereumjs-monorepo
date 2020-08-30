import BN = require('bn.js')
import { toBuffer, setLengthLeft } from 'ethereumjs-util'
import Account from '@ethereumjs/account'
import { encode } from 'rlp'
import { StateManager, DefaultStateManager } from '../dist/state'

interface StateTestPreAccount {
  balance: string
  code: string
  nonce: string
  storage: { [k: string]: string }
}

export async function getPreState(pre: {
  [k: string]: StateTestPreAccount
}): Promise<StateManager> {
  const state = new DefaultStateManager()
  await state.checkpoint()
  for (const k in pre) {
    const kBuf = toBuffer(k)
    const obj = pre[k]
    const code = toBuffer(obj.code)
    const acc = new Account()
    acc.nonce = hexToBuffer(obj.nonce)
    acc.balance = hexToBuffer(obj.balance)
    await state.putAccount(kBuf, acc)
    await state.putContractCode(kBuf, code)
    for (const sk in obj.storage) {
      const sv = obj.storage[sk]
      await state.putContractStorage(kBuf, toBuffer(sk), toBuffer(sv))
    }
  }
  await state.commit()
  return state
}

const hexToBuffer = (h: string, allowZero: boolean = false): Buffer => {
  const buf = toBuffer(h)
  if (!allowZero && buf.toString('hex') === '00') {
    return Buffer.alloc(0)
  }
  return buf
}
