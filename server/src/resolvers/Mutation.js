const auth = require('./mutations/auth');
const createSitte = require('./mutations/createSitte');
const stripe = require("./mutations/Stripe");

const Mutation = {
  ...auth,
  ...createSitte,
  ...stripe
}

module.exports = {
  Mutation,
}
