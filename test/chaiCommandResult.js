export default function (chai, utils) {
  const Assertion = chai.Assertion
  Assertion.addMethod('commandResult', function (stdout) {
    this.assert(
      this._obj.stdout === stdout
      , 'expected #{this}.stdout to equal #{exp}, but got #{act}'
      , 'expected #{this}.stdout to not equal #{exp}'
      , stdout,
    )
    this.assert(
      this._obj.stderr === ''
      , 'expected #{this}.stderr to equal #{exp}, but got #{act}'
      , 'expected #{this}.stderr to not equal #{exp}'
      , '',
    )
    this.assert(
      this._obj.exitCode === 0
      , 'expected #{this}.exitCode to equal #{exp}, but got #{act}'
      , 'expected #{this}.exitCode to not equal #{exp}'
      , '',
    )
  })
}
