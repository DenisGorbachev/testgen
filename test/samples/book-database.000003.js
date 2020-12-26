export const story = async function () {
  return alice.run('author list')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: '',
    stderr: '',
    exitCode: 0,
  })
}
