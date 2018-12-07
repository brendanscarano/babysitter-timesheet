"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "AccountType",
    embedded: false
  },
  {
    name: "Date",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "RateType",
    embedded: false
  },
  {
    name: "Sitte",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/sitter-sheet/dev`,
  secret: `${process.env["PRISMA_MANAGEMENT_API_SECRET"]}`
});
exports.prisma = new exports.Prisma();
