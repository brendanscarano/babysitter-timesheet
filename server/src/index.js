const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { resolvers } = require("./resolvers");
const { permissions } = require("./permissions");
const Stripe = require("stripe");

const { STRIPE_SECRET } = process.env;
const stripe = new Stripe(STRIPE_SECRET);

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
      stripe
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
