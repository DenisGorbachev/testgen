export const prepare = async function () {

}

export const execute = async function () {
  return exec('author add "George Orwell"')
}

export const test = async function (result, snapshotOld, snapshotNew) {
  expect(result).toEqual({
    stdout: 'Added author "George Orwell"',
    stderr: '',
    exitCode: 0,
  })
  expect(snapshotNew).toEqual((function () {
    const snapshotNewOurs = _.clone(snapshotOld)
    snapshotNewOurs.authors.push({
      id: 1,
      name: 'George Orwell',
    })
    return snapshotNewOurs
  })())
}
