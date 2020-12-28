import fs from 'fs'
import tmp from 'tmp'
import '../test/chai.js'
import { exec } from './test/helpers.js'

test('User runs testgen for bookshelf project', async function () {
  expect(1).toEqual(2)
})

test('User runs generated tests', async function () {
  const result = await exec(`jest`, [`${__dirname}/test/generated`], { preferLocal: true })
  console.log('result', result)
})

test('User writes event definitions', async function () {

})

test('User runs testgen for quadratic-equation sample', async function () {
  const targetDir = await getTargetDir()
  const sampleDir = await getSampleDir()
  const targetTestFilename = `${targetDir}/000001.test.js`
  const sampleTestFilename = `${sampleDir}/quadratic-equation.000001.js`
  const result = await exec(`${__dirname}/testgen.dev.sh`, [`${sampleDir}/quadratic-equation.js`, targetDir])
  result.should.be.a.commandResult(`Generated ${targetTestFilename}`)
  const testActual = fs.readFileSync(targetTestFilename)
  const testExpected = fs.readFileSync(sampleTestFilename)
  testActual.should.equal(testExpected)
})

async function getTargetDir() {
  const obj = tmp.dirSync()
  return obj.name
}

async function getSampleDir() {
  return `${__dirname}/test/sample`
}
