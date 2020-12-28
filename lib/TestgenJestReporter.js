module.exports = class TestgenJestReporter {
  constructor(globalConfig, options = {}) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onTestResult(test, result, stats) {
    if (result.testExecError) {
      console.error('testExecError', result.testExecError)
      throw new Error('Handle testExecError')
    }
    for (const testResult of result.testResults) {
      console.log('testResult', testResult);
    }
  }

}
