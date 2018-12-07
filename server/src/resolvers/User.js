const User = {
  sittes: (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).sittes()
  }
}

module.exports = {
  User,
}
