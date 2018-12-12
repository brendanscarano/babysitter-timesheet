const { hash, compare } = require('bcrypt')
const { APP_SECRET, removeAllUsersSessions } = require('../utils')
const { userSessionIdPrefix } = require('../constants');
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

      const { sessionID } = ctx.req;

      ctx.session.userId = user.id;
      if (sessionID) {
        await ctx.redis.lpush(`${userSessionIdPrefix}${user.id}`, sessionID);
      }

      return { token: sessionID, user };
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

    const { sessionID } = ctx.req;

    ctx.session.userId = user.id;
    if (sessionID) {
      await ctx.redis.lpush(`${userSessionIdPrefix}${user.id}`, sessionID);
    }

    return { token: sessionID, user };
  },
  logout: async (_, __, { session, redis, res }) => {
    const { userId } = session;
    if (userId) {
      removeAllUsersSessions(userId, redis);
      session.destroy(err => {
        if (err) {
          console.log(err);
        }
      });
      res.clearCookie("qid");
      return true;
    }

    return false;
  },
  ...stripe
}

module.exports = {
  Mutation,
}
