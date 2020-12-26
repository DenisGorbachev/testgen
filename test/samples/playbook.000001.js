export const story = async function () {
  return alice.open('/')
}

export const test = async function (result) {
  const body = ''
  expect(body).toContain('Smart Visa extension')
  expect(body).toContain('Website')
  expect(body).toContain('Extension form')
  expect(body).toContain('Company name reservation')
  expect(body).toContain('Memorandum of Association')
}
