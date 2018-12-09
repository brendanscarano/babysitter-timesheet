const auth = require('./mutations/auth');
const createChild = require('./mutations/createChild');
const stripe = require("./mutations/Stripe");

const Mutation = {
  ...auth,
  ...createChild,
  ...stripe
}

module.exports = {
  Mutation,
}
