import { ajv, getSchemaId } from '../util/ajv.js'
import { TestUser } from '../test/support/TestUser.js'

export const ActorSamples = [
  {
    name: 'alice',
    class: TestUser,
  },
  {
    name: 'bob',
    class: TestUser,
  },
  {
    name: 'admin',
    class: TestAdmin
  }
]

export const ActorSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'actor',
  description: 'a test actor (an entity that triggers events)',
  type: 'object',
  properties: {
    name: { type: 'string' },
    class: { type: 'function' },
  },
}

export const validateActor = ajv.compile(ActorSchema)
