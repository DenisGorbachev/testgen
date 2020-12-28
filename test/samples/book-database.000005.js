export const story = async function () {
  await exec('author add "George Orwell"')
  return exec('author remove "George Orwell"')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: 'Removed author: "George Orwell"',
    stderr: '',
    exitCode: 0,
  })
}
