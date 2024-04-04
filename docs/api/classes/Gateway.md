[bpmn-server](../readme.md) / Gateway

# Class: Gateway

## Hierarchy

- [`Node`](Node.md)

  ↳ **`Gateway`**

  ↳↳ [`XORGateway`](XORGateway.md)

  ↳↳ [`EventBasedGateway`](EventBasedGateway.md)

## Table of contents

### Constructors

- [constructor](Gateway.md#constructor)

### Properties

- [id](Gateway.md#id)
- [type](Gateway.md#type)
- [subType](Gateway.md#subtype)
- [behaviours](Gateway.md#behaviours)
- [isFlow](Gateway.md#isflow)
- [lane](Gateway.md#lane)
- [name](Gateway.md#name)
- [process](Gateway.md#process)
- [def](Gateway.md#def)
- [outbounds](Gateway.md#outbounds)
- [inbounds](Gateway.md#inbounds)
- [attachments](Gateway.md#attachments)
- [attachedTo](Gateway.md#attachedto)
- [messageId](Gateway.md#messageid)
- [signalId](Gateway.md#signalid)
- [initiator](Gateway.md#initiator)
- [assignee](Gateway.md#assignee)
- [candidateGroups](Gateway.md#candidategroups)
- [candidateUsers](Gateway.md#candidateusers)
- [scripts](Gateway.md#scripts)

### Accessors

- [processId](Gateway.md#processid)
- [requiresWait](Gateway.md#requireswait)
- [canBeInvoked](Gateway.md#canbeinvoked)
- [isCatching](Gateway.md#iscatching)

### Methods

- [restored](Gateway.md#restored)
- [hasBehaviour](Gateway.md#hasbehaviour)
- [getBehaviour](Gateway.md#getbehaviour)
- [addBehaviour](Gateway.md#addbehaviour)
- [getOutbounds](Gateway.md#getoutbounds)
- [getPotentialPath](Gateway.md#getpotentialpath)
- [canReach](Gateway.md#canreach)
- [getRelatedTokens](Gateway.md#getrelatedtokens)
- [analyzeConvergingTokens](Gateway.md#analyzeconvergingtokens)
- [start](Gateway.md#start)
- [validate](Gateway.md#validate)
- [doEvent](Gateway.md#doevent)
- [setInput](Gateway.md#setinput)
- [getInput](Gateway.md#getinput)
- [getOutput](Gateway.md#getoutput)
- [enter](Gateway.md#enter)
- [execute](Gateway.md#execute)
- [continue](Gateway.md#continue)
- [run](Gateway.md#run)
- [cancelEBG](Gateway.md#cancelebg)
- [cancelBoundaryEvents](Gateway.md#cancelboundaryevents)
- [end](Gateway.md#end)
- [resume](Gateway.md#resume)
- [init](Gateway.md#init)
- [startBoundaryEvents](Gateway.md#startboundaryevents)
- [describe](Gateway.md#describe)

## Constructors

### constructor

• **new Gateway**(`id`, `process`, `type`, `def`): [`Gateway`](Gateway.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `process` | `any` |
| `type` | `any` |
| `def` | `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Node](Node.md).[constructor](Node.md#constructor)

#### Defined in

[elements/Node.ts:32](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L32)

## Properties

### id

• **id**: `any`

#### Inherited from

[Node](Node.md).[id](Node.md#id)

#### Defined in

[elements/Element.ts:13](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L13)

___

### type

• **type**: `any`

#### Inherited from

[Node](Node.md).[type](Node.md#type)

#### Defined in

[elements/Element.ts:14](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L14)

___

### subType

• **subType**: `any`

#### Inherited from

[Node](Node.md).[subType](Node.md#subtype)

#### Defined in

[elements/Element.ts:15](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L15)

___

### behaviours

• **behaviours**: `Map`\<`any`, `any`\>

#### Inherited from

[Node](Node.md).[behaviours](Node.md#behaviours)

#### Defined in

[elements/Element.ts:17](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L17)

___

### isFlow

• **isFlow**: `boolean` = `false`

#### Inherited from

[Node](Node.md).[isFlow](Node.md#isflow)

#### Defined in

[elements/Element.ts:18](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L18)

___

### lane

• **lane**: `any`

#### Inherited from

[Node](Node.md).[lane](Node.md#lane)

#### Defined in

[elements/Element.ts:19](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L19)

___

### name

• **name**: `any`

#### Inherited from

[Node](Node.md).[name](Node.md#name)

#### Defined in

[elements/Node.ts:13](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L13)

___

### process

• **process**: `any`

#### Inherited from

[Node](Node.md).[process](Node.md#process)

#### Defined in

[elements/Node.ts:14](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L14)

___

### def

• **def**: `any`

#### Inherited from

[Node](Node.md).[def](Node.md#def)

#### Defined in

[elements/Node.ts:15](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L15)

___

### outbounds

• **outbounds**: [`Flow`](Flow.md)[]

#### Inherited from

[Node](Node.md).[outbounds](Node.md#outbounds)

#### Defined in

[elements/Node.ts:16](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L16)

___

### inbounds

• **inbounds**: [`Flow`](Flow.md)[]

#### Inherited from

[Node](Node.md).[inbounds](Node.md#inbounds)

#### Defined in

[elements/Node.ts:17](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L17)

___

### attachments

• **attachments**: [`Node`](Node.md)[]

#### Inherited from

[Node](Node.md).[attachments](Node.md#attachments)

#### Defined in

[elements/Node.ts:18](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L18)

___

### attachedTo

• **attachedTo**: [`Node`](Node.md)

#### Inherited from

[Node](Node.md).[attachedTo](Node.md#attachedto)

#### Defined in

[elements/Node.ts:19](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L19)

___

### messageId

• **messageId**: `any`

#### Inherited from

[Node](Node.md).[messageId](Node.md#messageid)

#### Defined in

[elements/Node.ts:20](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L20)

___

### signalId

• **signalId**: `any`

#### Inherited from

[Node](Node.md).[signalId](Node.md#signalid)

#### Defined in

[elements/Node.ts:21](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L21)

___

### initiator

• **initiator**: `any`

#### Inherited from

[Node](Node.md).[initiator](Node.md#initiator)

#### Defined in

[elements/Node.ts:22](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L22)

___

### assignee

• **assignee**: `any`

#### Inherited from

[Node](Node.md).[assignee](Node.md#assignee)

#### Defined in

[elements/Node.ts:23](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L23)

___

### candidateGroups

• **candidateGroups**: `any`

#### Inherited from

[Node](Node.md).[candidateGroups](Node.md#candidategroups)

#### Defined in

[elements/Node.ts:24](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L24)

___

### candidateUsers

• **candidateUsers**: `any`

#### Inherited from

[Node](Node.md).[candidateUsers](Node.md#candidateusers)

#### Defined in

[elements/Node.ts:25](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L25)

___

### scripts

• **scripts**: `Map`\<`any`, `any`\>

#### Inherited from

[Node](Node.md).[scripts](Node.md#scripts)

#### Defined in

[elements/Node.ts:26](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L26)

## Accessors

### processId

• `get` **processId**(): `any`

#### Returns

`any`

#### Inherited from

Node.processId

#### Defined in

[elements/Node.ts:27](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L27)

___

### requiresWait

• `get` **requiresWait**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Node.requiresWait

#### Defined in

[elements/Node.ts:124](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L124)

___

### canBeInvoked

• `get` **canBeInvoked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Node.canBeInvoked

#### Defined in

[elements/Node.ts:129](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L129)

___

### isCatching

• `get` **isCatching**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Node.isCatching

#### Defined in

[elements/Node.ts:131](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L131)

## Methods

### restored

▸ **restored**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`void`

#### Inherited from

[Node](Node.md).[restored](Node.md#restored)

#### Defined in

[elements/Element.ts:24](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L24)

___

### hasBehaviour

▸ **hasBehaviour**(`name`): `boolean`

respond by providing behaviour attributes beyond item and node information
 ex: timer due , input/outupt , fields

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`boolean`

#### Inherited from

[Node](Node.md).[hasBehaviour](Node.md#hasbehaviour)

#### Defined in

[elements/Element.ts:34](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L34)

___

### getBehaviour

▸ **getBehaviour**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

#### Inherited from

[Node](Node.md).[getBehaviour](Node.md#getbehaviour)

#### Defined in

[elements/Element.ts:38](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L38)

___

### addBehaviour

▸ **addBehaviour**(`nane`, `behavriour`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nane` | `any` |
| `behavriour` | `any` |

#### Returns

`void`

#### Inherited from

[Node](Node.md).[addBehaviour](Node.md#addbehaviour)

#### Defined in

[elements/Element.ts:41](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Element.ts#L41)

___

### getOutbounds

▸ **getOutbounds**(`item`): [`Item`](Item.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

[`Item`](Item.md)[]

#### Overrides

[Node](Node.md).[getOutbounds](Node.md#getoutbounds)

#### Defined in

[elements/Gateway.ts:34](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L34)

___

### getPotentialPath

▸ **getPotentialPath**(`node`, `path?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `node` | `any` | `undefined` |
| `path` | `any` | `null` |

#### Returns

`any`

#### Defined in

[elements/Gateway.ts:64](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L64)

___

### canReach

▸ **canReach**(`node`, `target`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `target` | `any` |

#### Returns

`any`

#### Defined in

[elements/Gateway.ts:78](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L78)

___

### getRelatedTokens

▸ **getRelatedTokens**(`item`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`any`[]

#### Defined in

[elements/Gateway.ts:88](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L88)

___

### analyzeConvergingTokens

▸ **analyzeConvergingTokens**(`item`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pendingTokens` | [`Token`](Token.md)[] |
| `waitingTokens` | [`Token`](Token.md)[] |

#### Defined in

[elements/Gateway.ts:120](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L120)

___

### start

▸ **start**(`item`): `Promise`\<[`NODE_ACTION`](../enums/NODE_ACTION.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<[`NODE_ACTION`](../enums/NODE_ACTION.md)\>

#### Overrides

[Node](Node.md).[start](Node.md#start)

#### Defined in

[elements/Gateway.ts:149](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Gateway.ts#L149)

___

### validate

▸ **validate**(`item`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[validate](Node.md#validate)

#### Defined in

[elements/Node.ts:45](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L45)

___

### doEvent

▸ **doEvent**(`item`, `event`, `newStatus`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |
| `event` | [`EXECUTION_EVENT`](../enums/EXECUTION_EVENT.md) |
| `newStatus` | [`ITEM_STATUS`](../enums/ITEM_STATUS.md) |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

[Node](Node.md).[doEvent](Node.md#doevent)

#### Defined in

[elements/Node.ts:58](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L58)

___

### setInput

▸ **setInput**(`item`, `input`): `Promise`\<`void`\>

is Called after execution 
transform data using input rules
todo

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |
| `input` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[setInput](Node.md#setinput)

#### Defined in

[elements/Node.ts:87](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L87)

___

### getInput

▸ **getInput**(`item`, `input`): `Promise`\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |
| `input` | `any` |

#### Returns

`Promise`\<{}\>

#### Inherited from

[Node](Node.md).[getInput](Node.md#getinput)

#### Defined in

[elements/Node.ts:97](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L97)

___

### getOutput

▸ **getOutput**(`item`): `Promise`\<{}\>

transform data using output rules
todo

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<{}\>

#### Inherited from

[Node](Node.md).[getOutput](Node.md#getoutput)

#### Defined in

[elements/Node.ts:111](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L111)

___

### enter

▸ **enter**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`void`

#### Inherited from

[Node](Node.md).[enter](Node.md#enter)

#### Defined in

[elements/Node.ts:115](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L115)

___

### execute

▸ **execute**(`item`): `Promise`\<`void` \| [`wait`](../enums/NODE_ACTION.md#wait) \| [`end`](../enums/NODE_ACTION.md#end) \| [`error`](../enums/NODE_ACTION.md#error) \| [`abort`](../enums/NODE_ACTION.md#abort)\>

this is the primary exectuion method for a node

considerations: the following are handled by Token
     1.  Loops we are inside a loop already (if any)
     2.  Gatways 
     3.  Subprocess the parent node is fired as normal
             run method will fire the subprocess invoking a new token and will go into wait

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<`void` \| [`wait`](../enums/NODE_ACTION.md#wait) \| [`end`](../enums/NODE_ACTION.md#end) \| [`error`](../enums/NODE_ACTION.md#error) \| [`abort`](../enums/NODE_ACTION.md#abort)\>

#### Inherited from

[Node](Node.md).[execute](Node.md#execute)

#### Defined in

[elements/Node.ts:141](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L141)

___

### continue

▸ **continue**(`item`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[continue](Node.md#continue)

#### Defined in

[elements/Node.ts:214](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L214)

___

### run

▸ **run**(`item`): `Promise`\<[`NODE_ACTION`](../enums/NODE_ACTION.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`Promise`\<[`NODE_ACTION`](../enums/NODE_ACTION.md)\>

#### Inherited from

[Node](Node.md).[run](Node.md#run)

#### Defined in

[elements/Node.ts:229](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L229)

___

### cancelEBG

▸ **cancelEBG**(`item`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[cancelEBG](Node.md#cancelebg)

#### Defined in

[elements/Node.ts:233](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L233)

___

### cancelBoundaryEvents

▸ **cancelBoundaryEvents**(`item`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[cancelBoundaryEvents](Node.md#cancelboundaryevents)

#### Defined in

[elements/Node.ts:241](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L241)

___

### end

▸ **end**(`item`, `cancel?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | [`Item`](Item.md) | `undefined` |
| `cancel` | `Boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[end](Node.md#end)

#### Defined in

[elements/Node.ts:274](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L274)

___

### resume

▸ **resume**(`item`): `void`

is called by the token after an execution resume for every active (in wait) item
different than init, which is called for all items

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`void`

#### Inherited from

[Node](Node.md).[resume](Node.md#resume)

#### Defined in

[elements/Node.ts:309](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L309)

___

### init

▸ **init**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](Item.md) |

#### Returns

`void`

#### Inherited from

[Node](Node.md).[init](Node.md#init)

#### Defined in

[elements/Node.ts:312](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L312)

___

### startBoundaryEvents

▸ **startBoundaryEvents**(`item`, `token`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `token` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](Node.md).[startBoundaryEvents](Node.md#startboundaryevents)

#### Defined in

[elements/Node.ts:336](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L336)

___

### describe

▸ **describe**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Node](Node.md).[describe](Node.md#describe)

#### Defined in

[elements/Node.ts:347](https://github.com/bpmnServer/bpmn-server/blob/40582af/src/elements/Node.ts#L347)
