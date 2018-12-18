// const { getUserId } = require('../../utils')

module.exports = {
    createOrUpdateDate: async (_, { dateId, dateObjectId, childId, month, day, year, hours, dayOfWeek, notes, paid, isFixedRate }, context) => {
        console.log('dateId', dateId)
        // const userId = getUserId(context)
        try {
            return await context.prisma.upsertDate({
                // where
                where: {
                    id: dateId
                },
                // create
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
                // update
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
            console.log('err', err)
            throw new Error(err.message);
        }
    },
}
