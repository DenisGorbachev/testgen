export const story = async function () {
  await alice.run('author add "George Orwell"')
  return alice.run('author list')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: 'George Orwell: 0 books',
    stderr: '',
    exitCode: 0,
  })
}
