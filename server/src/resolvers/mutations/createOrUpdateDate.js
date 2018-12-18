const { getUserId } = require('../../utils')

module.exports = {
    createOrUpdateDate: async (_, { firstName, lastName, rateAmount, rateType, gender }, context) => {
        const userId = getUserId(context)

        try {
            return await context.prisma.upsertDate({
                firstName,
                lastName,
                rateAmount,
                rateType,
                gender,
                owner: {
                    connect: {
                        id: userId
                    }
                },
            })
        } catch (err) {
            throw new Error(err.message);
        }
    },
}
