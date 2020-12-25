import fs from 'fs'
import tmp from 'tmp'
import './test/chai.js'
import { TestUser } from './test/support/TestUser.js'

let alice

beforeEach(async function () {
  alice = new TestUser()
})

test('User runs testgen for two-events sample', async function () {
  const targetDir = await getTargetDir()
  const sampleDir = await getSampleDir()
  const targetTestFilename = `${targetDir}/000001.test.js`
  const sampleTestFilename = `${sampleDir}/two-events.000001.js`
  const result = await alice.exec(`${__dirname}/testgen.test.sh`, [`${sampleDir}/two-events.js`, targetDir])
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
