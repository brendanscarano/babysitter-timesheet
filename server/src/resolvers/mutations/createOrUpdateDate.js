module.exports = {
    createOrUpdateDate: async (_, { dateId, dateObjectId, childId, month, day, year, hours, dayOfWeek, notes, paid, isFixedRate }, context) => {
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
                    isFixedRate,
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
                    isFixedRate,
                }
            })
        } catch (err) {
            throw new Error(err.message);
        }
    },
}
