const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Sitte } = require('./Sitte')

const resolvers = {
  Query,
  Mutation,
  User,
  Sitte
}

module.exports = {
  resolvers,
}
