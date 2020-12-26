export const story = async function () {
  await alice.run('author add "George Orwell"')
  return alice.run('author remove "George Orwell"')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: 'Removed author: "George Orwell"',
    stderr: '',
    exitCode: 0,
  })
}
