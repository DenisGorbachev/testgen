export const prepare = async function () {

}

export const execute = async function () {
  return open('alice', '/')
}

export const test = async function (result) {
  const body = ''
  expect(body).toContain('Smart Visa extension')
  expect(body).toContain('Website')
  expect(body).toContain('Extension form')
  expect(body).toContain('Company name reservation')
  expect(body).toContain('Memorandum of Association')
}
