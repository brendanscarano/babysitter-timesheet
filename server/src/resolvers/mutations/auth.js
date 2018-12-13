const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET } = require('../../utils')

module.exports = {
    signup: async (parent, { firstName, lastName, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10);

        try {
            const user = await ctx.prisma.createUser({
                firstName,
                lastName,
                email: email.toLowerCase(),
                password: hashedPassword,
            })

            return {
                token: sign({ userId: user.id }, APP_SECRET),
                user,
            }
        } catch (err) {
            throw new Error(err.message);
        }
    },
    login: async (parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user({ email: email.toLowerCase() })
        if (!user) {
            throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
            throw new Error('Invalid password')
        }
        return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
        }
    },
}
