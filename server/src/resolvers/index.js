const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Sitte } = require('./Sitte')
const { Date } = require('./Date')

const resolvers = {
  Query,
  Mutation,
  User,
  Sitte,
  Date
}

module.exports = {
  resolvers,
}
