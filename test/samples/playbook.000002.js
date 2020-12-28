export const story = async function () {
  await open('alice', '/')
  return click('alice', 'Website')
}

export const test = async function (result) {
  const body = ''
  expect(body).toContain('Smart Visa extension / Website')
  expect(body).toContain('Domain')
  expect(body).toContain('Pages')
}
