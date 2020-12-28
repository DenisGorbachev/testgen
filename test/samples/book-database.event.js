export let knex

export const beforeAll = async function () {
  // setup
  knex = null
}

export const afterAll = async function () {
  // teardown
  knex = null
}

export const getSnapshot = async function () {
  return {
    authors: await knex('authors').select(),
    books: await knex('books').select(),
  }
}

export const run = async function (command) {
  // use knex here
}

run.generator = async function * () {

}

run.getCommandExpansions = async function (command) {
  switch (true) {
    case '':
      return ['author', 'book']
    case 'author':
    case 'book':
      return ['add', 'update', 'remove', 'list']
    case 'author add':
      return final(await getAuthorNames())
    case 'author update':
      return await getAuthorNames()
    case 'author update "George Orwell"':
      return final(await getAuthorUpdateSet())
    default:
      throw new Error(`Unrecognized command: "${command}"`)
  }
}

function final(expansions) {
  expansions.__final = true
}

async function getAuthorNames() {
  return getStrings(['"George Orwell"', '"Non-Existing Author"'])
}

async function getAuthorUpdateSet() {
  return getUpdates({name: 'Lacey Austin'})
}

async function getAuthorUpdates() {
  return getUpdates({ name: await getAuthorNames() })
}

async function getStrings(valid = []) {
  return valid.concat('', 'unprintable \t characters', 'multiple \n lines', '123', '123.05')
}

async function getUpdates(fields) {
  const fieldsWithDefault = _.defaults(fields, { nonExistingField: 2 })
  return Object.getOwnPropertyNames(fieldsWithDefault).map((key) => `--set ${key}=${escapeShellArgument(fields[key])}`)
}

function escapeShellArgument(arg) {
  return '"' + arg.replace(/(["\s'$`\\])/g, '\\$1') + '"'
}

run.generator = async function * () {
  const commands = [].map((table) => {
  })
  for (const command of _.flattenDeep(commands)) {
    yield command
  }
}
