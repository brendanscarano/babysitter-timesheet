const User = {
  children: (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).children()
  }
}

module.exports = {
  User,
}
