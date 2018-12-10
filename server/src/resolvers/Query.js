const { getUserId } = require('../utils')

const Query = {
  me: (parent, args, context) => {
    const userId = getUserId(context)
    return context.prisma.user({ id: userId })
  },
  dates: (parent, args, context) => {
    return ['Yes', 'No', 'Maybe so']
  },
  sittes: (parent, args, context) => {
    const id = getUserId(context)
    return context.prisma.sittes({
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
