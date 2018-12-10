const User = {
  sittes: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).sittes()
  }
}

module.exports = {
  User,
}
