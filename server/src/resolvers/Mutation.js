const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')
const stripe = require("./Stripe");

const Mutation = {
  signup: async (parent, { firstName, lastName, email, password }, ctx) => {
    const hashedPassword = await hash(password, 10);

    try {
      const user = await ctx.prisma.createUser({
        firstName,
        lastName,
        email,
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
    const user = await ctx.prisma.user({ email })
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
  ...stripe
}

module.exports = {
  Mutation,
}
