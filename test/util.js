export const expectCommandResult = function (result) {
  result.stdout.should.equal()
  result.stderr.should.equal('')
  result.exitCode.should.equal(0)
}
