const Date = {
  owner: async ({ id }, _, ctx) => {
    return await ctx.prisma
      .date({
        id
      })
      .owner();
  }
};

module.exports = {
  Date
};
