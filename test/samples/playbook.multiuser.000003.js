export const story = async function () {
  await alice.open('/')
  await bob.open('/')
  await alice.click('Website')
  return alice.click('Done')
}

export const test = async function (result) {
  const body = await bob.getBody()
  expect(body).toContain('Smart Visa extension / Website')
  expect(body).toContain('Domain')
  expect(body).toContain('Pages')
}
