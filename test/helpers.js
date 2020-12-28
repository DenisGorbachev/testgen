import _ from 'lodash'
import execa from 'execa'

export const exec = async function (filename, args, options = {}) {
  return execa(filename, args, _.defaults(options, {}))
}
