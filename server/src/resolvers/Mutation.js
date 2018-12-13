const auth = require('./mutations/auth');
const createSittee = require('./mutations/createSittee');
const stripe = require("./mutations/Stripe");

const Mutation = {
  ...auth,
  ...createSittee,
  ...stripe
}

module.exports = {
  Mutation,
}
