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
    name: "Child",
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
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/sitter-sheet/dev`
});
exports.prisma = new exports.Prisma();
