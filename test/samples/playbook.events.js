export let cypress, knex

export const beforeAll = async function () {
  // setup
  cypress = null
  knex = null
}

export const afterAll = async function () {
  // teardown
  cypress = null
  knex = null
}

export const open = async function (user, path) {
  // use cypress & knex here
}

export const click = async function (user, selector) {
  // use cypress & knex here
}
