const { getUserId } = require('../../utils')

module.exports = {
    createSitte: async (_, { firstName, lastName, rateAmount, rateType, gender }, context) => {
        const userId = getUserId(context)

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
                },
            })
        } catch (err) {
            throw new Error(err.message);
        }
    },
}
