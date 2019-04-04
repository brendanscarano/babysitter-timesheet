module.exports = {
  createOrUpdateDate: async (
    _,
    {
      dateId,
      dateObjectId,
      childId,
      month,
      day,
      year,
      hours,
      dayOfWeek,
      notes,
      paid,
      isFixedRate
    },
    context
  ) => {
    try {
      return await context.prisma.upsertDate({
        where: {
          id: dateId
        },
        create: {
          dateObjectId,
          owner: { connect: { id: childId } },
          month,
          day,
          year,
          hours,
          dayOfWeek,
          notes,
          paid,
          isFixedRate
        },
        update: {
          dateObjectId,
          owner: { connect: { id: childId } },
          month,
          day,
          year,
          hours,
          dayOfWeek,
          notes,
          paid,
          isFixedRate
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  createDate: async (_, args, context) => {
    const {
      data: { dateObjectId, owner, month, day, year, hours }
    } = args;
    const {
      connect: { id }
    } = owner;
    try {
      return await context.prisma.createDate({
        dateObjectId,
        owner: {
          connect: {
            id
          }
        },
        month,
        day,
        year,
        hours
      });
    } catch (err) {
      throw new Error("err", err.message);
    }
  }
};
