import _ from 'lodash'
import execa from 'execa'

export class TestUser {
  async exec(filename, args, options = {}) {
    return execa(filename, args, _.defaults(options, {}))
  }
}
