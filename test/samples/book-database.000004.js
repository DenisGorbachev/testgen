export const story = async function () {
  return exec('author remove "George Orwell"')
}

export const test = async function (result) {
  expect(result).toEqual({
    stdout: '',
    stderr: "Can't remove author: \"George Orwell\" (not found)",
    exitCode: 1,
  })
}
