export const story = async function () {
  await open('alice', '/')
  await open('bob', '/')
  await click('alice', 'Website')
  return click('alice', 'Done')
}

export const test = async function (result) {
  const body = await getBody('bob')
  expect(body).toContain('Smart Visa extension / Website')
  expect(body).toContain('Domain')
  expect(body).toContain('Pages')
}
