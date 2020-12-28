import { getSchemaId } from '../util/ajv.js'

export const EventDefinitionSamples = [
  {
    actor: 'alice',
    method: 'open',
    args: [
      {
        title: 'path',
        description: 'page url path',
        type: 'string',
        generator: async function () {
          return [
            '/',
            '/smth',
            '/post/new',
          ].concat(await getPostUrls())
        },
      },
    ],
  },
  {
    actor: 'alice',
    method: 'click',
    args: [
      {
        title: 'selector',
        description: 'page element selector',
        type: 'string',
        generator: async function () {
          return [
            'Website',
            'Done',
          ].concat(await getClickableElements())
        },
      },
    ],
  },
]

const getPostUrls = async function () {
  const postIds = [1 /* get from database */]
  return postIds.map((id) => `/post/${id}`)
}

const getClickableElements = async function() {
  // implement me
}

/**
 * Must support runtime test generation (?)
 * - getClickableElements (try to click every element)
 */
const EventDefinitionSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'event definition',
  description: 'event definition for a test generator',
  type: 'object',
  properties: {
    caller: { type: 'string' /* must match an existing actor name */ },
    name: { type: 'number' },
    args: { type: 'number' },
  },

}
