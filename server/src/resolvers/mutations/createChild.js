module.exports = {
    createChild: async (parent, { firstName, lastName, rateAmount, rateType, gender, ownerId }, context) => {
        console.log('firstName, lastName, rateAmount, rateType, gender, ownerId', firstName, lastName, rateAmount, rateType, gender, ownerId)
        // TODO: Handle creating children for owners who aren't created yet --- is this possible?
        try {
            const child = await context.prisma.createChild({
                firstName,
                lastName,
                rateAmount,
                rateType,
                gender,
                owner: {
                    connect: {
                        id: ownerId
                    }
                },
            })
            console.log('child', child)

            return child
        } catch (err) {
            throw new Error(err.message);
        }
    },
}
