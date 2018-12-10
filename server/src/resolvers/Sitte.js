const { getUserId } = require("../utils");

const Sitte = {
  dates: async ({ id }, _, context) =>
    await context.prisma.sitte({ id }).dates()
};

module.exports = {
  Sitte
};
