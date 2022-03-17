[@ethereumjs/tx](../README.md) / Transaction

# Class: Transaction

An Ethereum non-typed (legacy) transaction

## Hierarchy

- `BaseTransaction`<[`Transaction`](Transaction.md)\>

  ↳ **`Transaction`**

## Table of contents

### Constructors

- [constructor](Transaction.md#constructor)

### Properties

- [common](Transaction.md#common)
- [data](Transaction.md#data)
- [gasLimit](Transaction.md#gaslimit)
- [gasPrice](Transaction.md#gasprice)
- [nonce](Transaction.md#nonce)
- [r](Transaction.md#r)
- [s](Transaction.md#s)
- [to](Transaction.md#to)
- [v](Transaction.md#v)
- [value](Transaction.md#value)

### Accessors

- [transactionType](Transaction.md#transactiontype)
- [type](Transaction.md#type)

### Methods

- [errorStr](Transaction.md#errorstr)
- [getBaseFee](Transaction.md#getbasefee)
- [getDataFee](Transaction.md#getdatafee)
- [getMessageToSign](Transaction.md#getmessagetosign)
- [getMessageToVerifySignature](Transaction.md#getmessagetoverifysignature)
- [getSenderAddress](Transaction.md#getsenderaddress)
- [getSenderPublicKey](Transaction.md#getsenderpublickey)
- [getUpfrontCost](Transaction.md#getupfrontcost)
- [hash](Transaction.md#hash)
- [isSigned](Transaction.md#issigned)
- [raw](Transaction.md#raw)
- [serialize](Transaction.md#serialize)
- [sign](Transaction.md#sign)
- [supports](Transaction.md#supports)
- [toCreationAddress](Transaction.md#tocreationaddress)
- [toJSON](Transaction.md#tojson)
- [validate](Transaction.md#validate)
- [verifySignature](Transaction.md#verifysignature)
- [fromRlpSerializedTx](Transaction.md#fromrlpserializedtx)
- [fromSerializedTx](Transaction.md#fromserializedtx)
- [fromTxData](Transaction.md#fromtxdata)
- [fromValuesArray](Transaction.md#fromvaluesarray)

## Constructors

### constructor

• **new Transaction**(`txData`, `opts?`)

This constructor takes the values, validates them, assigns them and freezes the object.

It is not recommended to use this constructor directly. Instead use
the static factory methods to assist in creating a Transaction object from
varying data types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [`TxData`](../README.md#txdata) |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Overrides

BaseTransaction&lt;Transaction\&gt;.constructor

#### Defined in

[legacyTransaction.ts:107](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L107)

## Properties

### common

• `Readonly` **common**: `default`

#### Overrides

BaseTransaction.common

#### Defined in

[legacyTransaction.ts:26](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L26)

___

### data

• `Readonly` **data**: `Buffer`

#### Inherited from

BaseTransaction.data

#### Defined in

[baseTransaction.ts:47](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L47)

___

### gasLimit

• `Readonly` **gasLimit**: `BN`

#### Inherited from

BaseTransaction.gasLimit

#### Defined in

[baseTransaction.ts:44](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L44)

___

### gasPrice

• `Readonly` **gasPrice**: `BN`

#### Defined in

[legacyTransaction.ts:24](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L24)

___

### nonce

• `Readonly` **nonce**: `BN`

#### Inherited from

BaseTransaction.nonce

#### Defined in

[baseTransaction.ts:43](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L43)

___

### r

• `Optional` `Readonly` **r**: `BN`

#### Inherited from

BaseTransaction.r

#### Defined in

[baseTransaction.ts:50](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L50)

___

### s

• `Optional` `Readonly` **s**: `BN`

#### Inherited from

BaseTransaction.s

#### Defined in

[baseTransaction.ts:51](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L51)

___

### to

• `Optional` `Readonly` **to**: `Address`

#### Inherited from

BaseTransaction.to

#### Defined in

[baseTransaction.ts:45](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L45)

___

### v

• `Optional` `Readonly` **v**: `BN`

#### Inherited from

BaseTransaction.v

#### Defined in

[baseTransaction.ts:49](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L49)

___

### value

• `Readonly` **value**: `BN`

#### Inherited from

BaseTransaction.value

#### Defined in

[baseTransaction.ts:46](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L46)

## Accessors

### transactionType

• `get` **transactionType**(): `number`

Alias for {@link BaseTransaction.type}

**`deprecated`** Use `type` instead

#### Returns

`number`

#### Inherited from

BaseTransaction.transactionType

#### Defined in

[baseTransaction.ts:118](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L118)

___

### type

• `get` **type**(): `number`

Returns the transaction type.

Note: legacy txs will return tx type `0`.

#### Returns

`number`

#### Inherited from

BaseTransaction.type

#### Defined in

[baseTransaction.ts:127](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L127)

## Methods

### errorStr

▸ **errorStr**(): `string`

Return a compact error string representation of the object

#### Returns

`string`

#### Overrides

BaseTransaction.errorStr

#### Defined in

[legacyTransaction.ts:448](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L448)

___

### getBaseFee

▸ **getBaseFee**(): `BN`

The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

#### Returns

`BN`

#### Inherited from

BaseTransaction.getBaseFee

#### Defined in

[baseTransaction.ts:175](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L175)

___

### getDataFee

▸ **getDataFee**(): `BN`

The amount of gas paid for the data in this tx

#### Returns

`BN`

#### Overrides

BaseTransaction.getDataFee

#### Defined in

[legacyTransaction.ts:237](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L237)

___

### getMessageToSign

▸ **getMessageToSign**(`hashMessage`): `Buffer`[]

Returns the unsigned tx (hashed or raw), which can be used
to sign the transaction (e.g. for sending to a hardware wallet).

Note: the raw message message format for the legacy tx is not RLP encoded
and you might need to do yourself with:

```javascript
import { rlp } from 'ethereumjs-util'
const message = tx.getMessageToSign(false)
const serializedMessage = rlp.encode(message) // use this for the HW wallet input
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashMessage` | ``false`` | Return hashed message if set to true (default: true) |

#### Returns

`Buffer`[]

#### Overrides

BaseTransaction.getMessageToSign

#### Defined in

[legacyTransaction.ts:223](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L223)

▸ **getMessageToSign**(`hashMessage?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashMessage?` | ``true`` |

#### Returns

`Buffer`

#### Overrides

BaseTransaction.getMessageToSign

#### Defined in

[legacyTransaction.ts:224](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L224)

___

### getMessageToVerifySignature

▸ **getMessageToVerifySignature**(): `Buffer`

Computes a sha3-256 hash which can be used to verify the signature

#### Returns

`Buffer`

#### Overrides

BaseTransaction.getMessageToVerifySignature

#### Defined in

[legacyTransaction.ts:294](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L294)

___

### getSenderAddress

▸ **getSenderAddress**(): `Address`

Returns the sender's address

#### Returns

`Address`

#### Inherited from

BaseTransaction.getSenderAddress

#### Defined in

[baseTransaction.ts:280](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L280)

___

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

Returns the public key of the sender

#### Returns

`Buffer`

#### Overrides

BaseTransaction.getSenderPublicKey

#### Defined in

[legacyTransaction.ts:306](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L306)

___

### getUpfrontCost

▸ **getUpfrontCost**(): `BN`

The up front amount that an account must have for this transaction to be valid

#### Returns

`BN`

#### Overrides

BaseTransaction.getUpfrontCost

#### Defined in

[legacyTransaction.ts:255](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L255)

___

### hash

▸ **hash**(): `Buffer`

Computes a sha3-256 hash of the serialized tx.

This method can only be used for signed txs (it throws otherwise).
Use [Transaction.getMessageToSign](Transaction.md#getmessagetosign) to get a tx hash for the purpose of signing.

#### Returns

`Buffer`

#### Overrides

BaseTransaction.hash

#### Defined in

[legacyTransaction.ts:265](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L265)

___

### isSigned

▸ **isSigned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTransaction.isSigned

#### Defined in

[baseTransaction.ts:247](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L247)

___

### raw

▸ **raw**(): [`TxValuesArray`](../README.md#txvaluesarray)

Returns a Buffer Array of the raw Buffers of the legacy transaction, in order.

Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`

For legacy txs this is also the correct format to add transactions
to a block with {@link Block.fromValuesArray} (use the `serialize()` method
for typed txs).

For an unsigned tx this method returns the empty Buffer values
for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
representation have a look at [Transaction.getMessageToSign](Transaction.md#getmessagetosign).

#### Returns

[`TxValuesArray`](../README.md#txvaluesarray)

#### Overrides

BaseTransaction.raw

#### Defined in

[legacyTransaction.ts:162](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L162)

___

### serialize

▸ **serialize**(): `Buffer`

Returns the serialized encoding of the legacy transaction.

Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`

For an unsigned tx this method uses the empty Buffer values for the
signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
representation for external signing use [Transaction.getMessageToSign](Transaction.md#getmessagetosign).

#### Returns

`Buffer`

#### Overrides

BaseTransaction.serialize

#### Defined in

[legacyTransaction.ts:185](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L185)

___

### sign

▸ **sign**(`privateKey`): [`Transaction`](Transaction.md)

Signs a transaction.

Note that the signed tx is returned as a new object,
use as follows:
```javascript
const signedTx = tx.sign(privateKey)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Buffer` |

#### Returns

[`Transaction`](Transaction.md)

#### Inherited from

BaseTransaction.sign

#### Defined in

[baseTransaction.ts:298](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L298)

___

### supports

▸ **supports**(`capability`): `boolean`

Checks if a tx type defining capability is active
on a tx, for example the EIP-1559 fee market mechanism
or the EIP-2930 access list feature.

Note that this is different from the tx type itself,
so EIP-2930 access lists can very well be active
on an EIP-1559 tx for example.

This method can be useful for feature checks if the
tx type is unknown (e.g. when instantiated with
the tx factory).

See `Capabilites` in the `types` module for a reference
on all supported capabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `capability` | [`Capability`](../enums/Capability.md) |

#### Returns

`boolean`

#### Inherited from

BaseTransaction.supports

#### Defined in

[baseTransaction.ts:147](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L147)

___

### toCreationAddress

▸ **toCreationAddress**(): `boolean`

If the tx's `to` is to the creation address

#### Returns

`boolean`

#### Inherited from

BaseTransaction.toCreationAddress

#### Defined in

[baseTransaction.ts:215](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L215)

___

### toJSON

▸ **toJSON**(): [`JsonTx`](../interfaces/JsonTx.md)

Returns an object with the JSON representation of the transaction.

#### Returns

[`JsonTx`](../interfaces/JsonTx.md)

#### Overrides

BaseTransaction.toJSON

#### Defined in

[legacyTransaction.ts:365](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L365)

___

### validate

▸ **validate**(): `boolean`

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

#### Returns

`boolean`

#### Inherited from

BaseTransaction.validate

#### Defined in

[baseTransaction.ts:155](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L155)

▸ **validate**(`stringError`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringError` | ``false`` |

#### Returns

`boolean`

#### Inherited from

BaseTransaction.validate

#### Defined in

[baseTransaction.ts:156](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L156)

▸ **validate**(`stringError`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringError` | ``true`` |

#### Returns

`string`[]

#### Inherited from

BaseTransaction.validate

#### Defined in

[baseTransaction.ts:157](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L157)

___

### verifySignature

▸ **verifySignature**(): `boolean`

Determines if the signature is valid

#### Returns

`boolean`

#### Inherited from

BaseTransaction.verifySignature

#### Defined in

[baseTransaction.ts:267](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L267)

___

### fromRlpSerializedTx

▸ `Static` **fromRlpSerializedTx**(`serialized`, `opts?`): [`Transaction`](Transaction.md)

Instantiate a transaction from the serialized tx.
(alias of [Transaction.fromSerializedTx](Transaction.md#fromserializedtx))

**`deprecated`** this constructor alias is deprecated and will be removed
in favor of the [Transaction.fromSerializedTx](Transaction.md#fromserializedtx) constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[legacyTransaction.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L62)

___

### fromSerializedTx

▸ `Static` **fromSerializedTx**(`serialized`, `opts?`): [`Transaction`](Transaction.md)

Instantiate a transaction from the serialized tx.

Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[legacyTransaction.ts:45](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L45)

___

### fromTxData

▸ `Static` **fromTxData**(`txData`, `opts?`): [`Transaction`](Transaction.md)

Instantiate a transaction from a data dictionary.

Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }

Notes:
- All parameters are optional and have some basic default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [`TxData`](../README.md#txdata) |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[legacyTransaction.ts:36](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L36)

___

### fromValuesArray

▸ `Static` **fromValuesArray**(`values`, `opts?`): [`Transaction`](Transaction.md)

Create a transaction from a values array.

Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`TxValuesArray`](../README.md#txvaluesarray) |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[legacyTransaction.ts:71](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/legacyTransaction.ts#L71)
