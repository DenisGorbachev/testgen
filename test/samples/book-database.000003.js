export const prepare = async function () {

}

export const execute = async function () {
  return exec('author list')
}

export const test = async function (result, snapshotOld, snapshotNew) {
  expect(result).toEqual({
    stdout: '',
    stderr: '',
    exitCode: 0,
  })
  expect(snapshotNew).toEqual(snapshotOld)
}
