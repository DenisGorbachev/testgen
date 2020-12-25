import fs from 'fs'

test('User runs testgen for two-events sample', async function () {
  const targetDir = await getTargetDir()
  const samplesDir = await getSamplesDir()
  user.run('./testgen', [`${samplesDir}/two-events.js`, targetDir])
  const testActual = fs.readFileSync(`${targetDir}/000001.test.js`)
  const testExpected = fs.readFileSync(`${samplesDir}/two-events.000001.test.js`)
  expect(testActual).toEqual(testExpected)
})

async function getTargetDir() {
  return getTmpDir()
}

async function getSamplesDir() {
  return `${__dirname}/test/samples`
}
