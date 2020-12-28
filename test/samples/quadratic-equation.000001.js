export async function prepare() {

}

export async function execute() {
  return getRoots({ a: 5, b: 6, c: 1 })
}

export async function test(result, snapshotOld, snapshotNew) {
  expect(result).toEqual({ x1: -1, x2: -0.2 })
  expect(snapshotNew).toEqual(snapshotOld)
}
