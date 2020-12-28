export const prepare = async function () {
  await exec('author add "George Orwell"')
}

export const execute = async function () {
  return exec('author list')
}

export const test = async function (result, snapshotOld, snapshotNew) {
  expect(result).toEqual({
    stdout: 'George Orwell: 0 books',
    stderr: '',
    exitCode: 0,
  })
  expect(snapshotNew).toEqual(snapshotOld)
}
