export default function (chai, utils) {
  const Assertion = chai.Assertion
  Assertion.addMethod('commandResult', function (stdout) {
    this.assert(
      this._obj.stdout === stdout
      , 'expected stdout to equal #{exp}, but got #{act}'
      , 'expected stdout to not equal #{exp}'
      , stdout
      , this._obj.stdout,
    )
    this.assert(
      this._obj.stderr === ''
      , 'expected stderr to equal #{exp}, but got #{act}'
      , 'expected stderr to not equal #{exp}'
      , ''
      , this._obj.stderr,
    )
    this.assert(
      this._obj.exitCode === 0
      , 'expected exitCode to equal #{exp}, but got #{act}'
      , 'expected exitCode to not equal #{exp}'
      , ''
      , this._obj.exitCode,
    )
  })
}
