import chai from 'chai'
import chaiThings from 'chai-things'
import chaiSubset from 'chai-subset'
import chaiDatetime from 'chai-datetime'
import chaiCommandResult from './chaiCommandResult.js'

chai.should()
chai.use(chaiThings)
chai.use(chaiSubset)
chai.use(chaiDatetime)
chai.use(chaiCommandResult);
