const { getUserId } = require('../utils')

const Query = {
  me: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    return ctx.prisma.user({ id: userId })
  },
  dates: (parent, args, ctx) => {
    return ['Yes', 'No', 'Maybe so']
  },
  sittes: (parent, args, ctx) => {
    const id = getUserId(ctx)
    return ctx.prisma.sittes({
      where: {
        owner: {
          id
        }
      }
    })
  }
}

module.exports = {
  Query,
}
