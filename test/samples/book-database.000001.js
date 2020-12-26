export const story = async function () {
  return alice.run('author add "George Orwell"')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: 'Added author "George Orwell"',
    stderr: '',
    exitCode: 0,
  })
}
