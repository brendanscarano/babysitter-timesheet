const { getUserId } = require("../../utils");

module.exports = {
  createSitte: async (
    _,
    { firstName, lastName, rateAmount, rateType, gender },
    context
  ) => {
    const userId = getUserId(context);

    // TODO: Handle creating children for owners who aren't created yet --- is this possible?
    try {
      return await context.prisma.createSitte({
        firstName,
        lastName,
        rateAmount,
        rateType,
        gender,
        owner: {
          connect: {
            id: userId
          }
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateSitte: async (_, {}, context) => {
    return await context.prisma.updateSitte({
      data: { owner: { connect: { id: "cjsq87lx1005s0933sjgl2vw5" } } },
      where: { id: "cjsq881oy00600933qrtmbdyg" }
    });
  },
  deleteSitte: (_, args, context) => {
    const {
      where: { id }
    } = args;
    return context.prisma.deleteSitte({ id });
  }
};
