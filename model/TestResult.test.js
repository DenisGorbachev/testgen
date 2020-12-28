import { TestResultSamples, validateTestResult } from './TestResult.js'

test('TestResult samples match schema', async function() {
  for (const sample of TestResultSamples) {
    const value = await validateTestResult(sample)
    expect(value).toBeDefined()
  }
})
