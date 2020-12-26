test('1', async function () {
  expect(getRoots({ a: 5, b: 6, c: 1 })).toEqual({ x1: -1, x2: -0.2 })
})
