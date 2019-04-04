const auth = require("./mutations/auth");
const { createSitte, updateSitte, deleteSitte } = require("./mutations/sitte");
const {
  createOrUpdateDate,
  createDate
} = require("./mutations/createOrUpdateDate");
const stripe = require("./mutations/Stripe");

const Mutation = {
  ...auth,
  createSitte,
  updateSitte,
  deleteSitte,
  createOrUpdateDate,
  createDate,
  ...stripe
};

module.exports = {
  Mutation
};
