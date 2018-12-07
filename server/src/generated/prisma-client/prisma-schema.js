module.exports = {
        typeDefs: /* GraphQL */ `enum AccountType {
  TRIAL
  MONTHLY_PAID
}

type AggregateDate {
  count: Int!
}

type AggregateSitte {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Date {
  id: ID!
  dateObjectId: String!
  owner: Sitte!
  month: Float!
  day: Float!
  year: Float!
  hours: Float!
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

type DateConnection {
  pageInfo: PageInfo!
  edges: [DateEdge]!
  aggregate: AggregateDate!
}

input DateCreateInput {
  dateObjectId: String!
  owner: SitteCreateOneWithoutDatesInput!
  month: Float!
  day: Float!
  year: Float!
  hours: Float!
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

input DateCreateManyWithoutOwnerInput {
  create: [DateCreateWithoutOwnerInput!]
  connect: [DateWhereUniqueInput!]
}

input DateCreateWithoutOwnerInput {
  dateObjectId: String!
  month: Float!
  day: Float!
  year: Float!
  hours: Float!
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

type DateEdge {
  node: Date!
  cursor: String!
}

enum DateOrderByInput {
  id_ASC
  id_DESC
  dateObjectId_ASC
  dateObjectId_DESC
  month_ASC
  month_DESC
  day_ASC
  day_DESC
  year_ASC
  year_DESC
  hours_ASC
  hours_DESC
  dayOfWeek_ASC
  dayOfWeek_DESC
  notes_ASC
  notes_DESC
  paid_ASC
  paid_DESC
  isFixedRate_ASC
  isFixedRate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DatePreviousValues {
  id: ID!
  dateObjectId: String!
  month: Float!
  day: Float!
  year: Float!
  hours: Float!
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

type DateSubscriptionPayload {
  mutation: MutationType!
  node: Date
  updatedFields: [String!]
  previousValues: DatePreviousValues
}

input DateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DateWhereInput
  AND: [DateSubscriptionWhereInput!]
  OR: [DateSubscriptionWhereInput!]
  NOT: [DateSubscriptionWhereInput!]
}

scalar DateTime

input DateUpdateInput {
  dateObjectId: String
  owner: SitteUpdateOneRequiredWithoutDatesInput
  month: Float
  day: Float
  year: Float
  hours: Float
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

input DateUpdateManyMutationInput {
  dateObjectId: String
  month: Float
  day: Float
  year: Float
  hours: Float
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

input DateUpdateManyWithoutOwnerInput {
  create: [DateCreateWithoutOwnerInput!]
  delete: [DateWhereUniqueInput!]
  connect: [DateWhereUniqueInput!]
  disconnect: [DateWhereUniqueInput!]
  update: [DateUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [DateUpsertWithWhereUniqueWithoutOwnerInput!]
}

input DateUpdateWithoutOwnerDataInput {
  dateObjectId: String
  month: Float
  day: Float
  year: Float
  hours: Float
  dayOfWeek: String
  notes: String
  paid: Float
  isFixedRate: Boolean
}

input DateUpdateWithWhereUniqueWithoutOwnerInput {
  where: DateWhereUniqueInput!
  data: DateUpdateWithoutOwnerDataInput!
}

input DateUpsertWithWhereUniqueWithoutOwnerInput {
  where: DateWhereUniqueInput!
  update: DateUpdateWithoutOwnerDataInput!
  create: DateCreateWithoutOwnerInput!
}

input DateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateObjectId: String
  dateObjectId_not: String
  dateObjectId_in: [String!]
  dateObjectId_not_in: [String!]
  dateObjectId_lt: String
  dateObjectId_lte: String
  dateObjectId_gt: String
  dateObjectId_gte: String
  dateObjectId_contains: String
  dateObjectId_not_contains: String
  dateObjectId_starts_with: String
  dateObjectId_not_starts_with: String
  dateObjectId_ends_with: String
  dateObjectId_not_ends_with: String
  owner: SitteWhereInput
  month: Float
  month_not: Float
  month_in: [Float!]
  month_not_in: [Float!]
  month_lt: Float
  month_lte: Float
  month_gt: Float
  month_gte: Float
  day: Float
  day_not: Float
  day_in: [Float!]
  day_not_in: [Float!]
  day_lt: Float
  day_lte: Float
  day_gt: Float
  day_gte: Float
  year: Float
  year_not: Float
  year_in: [Float!]
  year_not_in: [Float!]
  year_lt: Float
  year_lte: Float
  year_gt: Float
  year_gte: Float
  hours: Float
  hours_not: Float
  hours_in: [Float!]
  hours_not_in: [Float!]
  hours_lt: Float
  hours_lte: Float
  hours_gt: Float
  hours_gte: Float
  dayOfWeek: String
  dayOfWeek_not: String
  dayOfWeek_in: [String!]
  dayOfWeek_not_in: [String!]
  dayOfWeek_lt: String
  dayOfWeek_lte: String
  dayOfWeek_gt: String
  dayOfWeek_gte: String
  dayOfWeek_contains: String
  dayOfWeek_not_contains: String
  dayOfWeek_starts_with: String
  dayOfWeek_not_starts_with: String
  dayOfWeek_ends_with: String
  dayOfWeek_not_ends_with: String
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  paid: Float
  paid_not: Float
  paid_in: [Float!]
  paid_not_in: [Float!]
  paid_lt: Float
  paid_lte: Float
  paid_gt: Float
  paid_gte: Float
  isFixedRate: Boolean
  isFixedRate_not: Boolean
  AND: [DateWhereInput!]
  OR: [DateWhereInput!]
  NOT: [DateWhereInput!]
}

input DateWhereUniqueInput {
  id: ID
}

enum Gender {
  MALE
  FEMALE
  OTHER
}

scalar Long

type Mutation {
  createDate(data: DateCreateInput!): Date!
  updateDate(data: DateUpdateInput!, where: DateWhereUniqueInput!): Date
  updateManyDates(data: DateUpdateManyMutationInput!, where: DateWhereInput): BatchPayload!
  upsertDate(where: DateWhereUniqueInput!, create: DateCreateInput!, update: DateUpdateInput!): Date!
  deleteDate(where: DateWhereUniqueInput!): Date
  deleteManyDates(where: DateWhereInput): BatchPayload!
  createSitte(data: SitteCreateInput!): Sitte!
  updateSitte(data: SitteUpdateInput!, where: SitteWhereUniqueInput!): Sitte
  updateManySittes(data: SitteUpdateManyMutationInput!, where: SitteWhereInput): BatchPayload!
  upsertSitte(where: SitteWhereUniqueInput!, create: SitteCreateInput!, update: SitteUpdateInput!): Sitte!
  deleteSitte(where: SitteWhereUniqueInput!): Sitte
  deleteManySittes(where: SitteWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  date(where: DateWhereUniqueInput!): Date
  dates(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Date]!
  datesConnection(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DateConnection!
  sitte(where: SitteWhereUniqueInput!): Sitte
  sittes(where: SitteWhereInput, orderBy: SitteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sitte]!
  sittesConnection(where: SitteWhereInput, orderBy: SitteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SitteConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum RateType {
  HOURLY
  FLAT
}

type Sitte {
  id: ID!
  firstName: String!
  lastName: String!
  birthday: DateTime
  owner: User!
  rateAmount: Float!
  rateType: RateType!
  createdAt: DateTime!
  updatedAt: DateTime!
  dates(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Date!]
  gender: Gender!
}

type SitteConnection {
  pageInfo: PageInfo!
  edges: [SitteEdge]!
  aggregate: AggregateSitte!
}

input SitteCreateInput {
  firstName: String!
  lastName: String!
  birthday: DateTime
  owner: UserCreateOneWithoutSittesInput!
  rateAmount: Float!
  rateType: RateType!
  dates: DateCreateManyWithoutOwnerInput
  gender: Gender!
}

input SitteCreateManyWithoutOwnerInput {
  create: [SitteCreateWithoutOwnerInput!]
  connect: [SitteWhereUniqueInput!]
}

input SitteCreateOneWithoutDatesInput {
  create: SitteCreateWithoutDatesInput
  connect: SitteWhereUniqueInput
}

input SitteCreateWithoutDatesInput {
  firstName: String!
  lastName: String!
  birthday: DateTime
  owner: UserCreateOneWithoutSittesInput!
  rateAmount: Float!
  rateType: RateType!
  gender: Gender!
}

input SitteCreateWithoutOwnerInput {
  firstName: String!
  lastName: String!
  birthday: DateTime
  rateAmount: Float!
  rateType: RateType!
  dates: DateCreateManyWithoutOwnerInput
  gender: Gender!
}

type SitteEdge {
  node: Sitte!
  cursor: String!
}

enum SitteOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  birthday_ASC
  birthday_DESC
  rateAmount_ASC
  rateAmount_DESC
  rateType_ASC
  rateType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  gender_ASC
  gender_DESC
}

type SittePreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  birthday: DateTime
  rateAmount: Float!
  rateType: RateType!
  createdAt: DateTime!
  updatedAt: DateTime!
  gender: Gender!
}

type SitteSubscriptionPayload {
  mutation: MutationType!
  node: Sitte
  updatedFields: [String!]
  previousValues: SittePreviousValues
}

input SitteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SitteWhereInput
  AND: [SitteSubscriptionWhereInput!]
  OR: [SitteSubscriptionWhereInput!]
  NOT: [SitteSubscriptionWhereInput!]
}

input SitteUpdateInput {
  firstName: String
  lastName: String
  birthday: DateTime
  owner: UserUpdateOneRequiredWithoutSittesInput
  rateAmount: Float
  rateType: RateType
  dates: DateUpdateManyWithoutOwnerInput
  gender: Gender
}

input SitteUpdateManyMutationInput {
  firstName: String
  lastName: String
  birthday: DateTime
  rateAmount: Float
  rateType: RateType
  gender: Gender
}

input SitteUpdateManyWithoutOwnerInput {
  create: [SitteCreateWithoutOwnerInput!]
  delete: [SitteWhereUniqueInput!]
  connect: [SitteWhereUniqueInput!]
  disconnect: [SitteWhereUniqueInput!]
  update: [SitteUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [SitteUpsertWithWhereUniqueWithoutOwnerInput!]
}

input SitteUpdateOneRequiredWithoutDatesInput {
  create: SitteCreateWithoutDatesInput
  update: SitteUpdateWithoutDatesDataInput
  upsert: SitteUpsertWithoutDatesInput
  connect: SitteWhereUniqueInput
}

input SitteUpdateWithoutDatesDataInput {
  firstName: String
  lastName: String
  birthday: DateTime
  owner: UserUpdateOneRequiredWithoutSittesInput
  rateAmount: Float
  rateType: RateType
  gender: Gender
}

input SitteUpdateWithoutOwnerDataInput {
  firstName: String
  lastName: String
  birthday: DateTime
  rateAmount: Float
  rateType: RateType
  dates: DateUpdateManyWithoutOwnerInput
  gender: Gender
}

input SitteUpdateWithWhereUniqueWithoutOwnerInput {
  where: SitteWhereUniqueInput!
  data: SitteUpdateWithoutOwnerDataInput!
}

input SitteUpsertWithoutDatesInput {
  update: SitteUpdateWithoutDatesDataInput!
  create: SitteCreateWithoutDatesInput!
}

input SitteUpsertWithWhereUniqueWithoutOwnerInput {
  where: SitteWhereUniqueInput!
  update: SitteUpdateWithoutOwnerDataInput!
  create: SitteCreateWithoutOwnerInput!
}

input SitteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  owner: UserWhereInput
  rateAmount: Float
  rateAmount_not: Float
  rateAmount_in: [Float!]
  rateAmount_not_in: [Float!]
  rateAmount_lt: Float
  rateAmount_lte: Float
  rateAmount_gt: Float
  rateAmount_gte: Float
  rateType: RateType
  rateType_not: RateType
  rateType_in: [RateType!]
  rateType_not_in: [RateType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  dates_every: DateWhereInput
  dates_some: DateWhereInput
  dates_none: DateWhereInput
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  AND: [SitteWhereInput!]
  OR: [SitteWhereInput!]
  NOT: [SitteWhereInput!]
}

input SitteWhereUniqueInput {
  id: ID
}

type Subscription {
  date(where: DateSubscriptionWhereInput): DateSubscriptionPayload
  sitte(where: SitteSubscriptionWhereInput): SitteSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: AccountType!
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
  sittes(where: SitteWhereInput, orderBy: SitteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sitte!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  type: AccountType
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
  sittes: SitteCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutSittesInput {
  create: UserCreateWithoutSittesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSittesInput {
  email: String!
  password: String!
  type: AccountType
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  ccLast4_ASC
  ccLast4_DESC
  stripeId_ASC
  stripeId_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: AccountType!
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  type: AccountType
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
  sittes: SitteUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  type: AccountType
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
}

input UserUpdateOneRequiredWithoutSittesInput {
  create: UserCreateWithoutSittesInput
  update: UserUpdateWithoutSittesDataInput
  upsert: UserUpsertWithoutSittesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSittesDataInput {
  email: String
  password: String
  type: AccountType
  ccLast4: String
  stripeId: String
  firstName: String
  lastName: String
}

input UserUpsertWithoutSittesInput {
  update: UserUpdateWithoutSittesDataInput!
  create: UserCreateWithoutSittesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: AccountType
  type_not: AccountType
  type_in: [AccountType!]
  type_not_in: [AccountType!]
  ccLast4: String
  ccLast4_not: String
  ccLast4_in: [String!]
  ccLast4_not_in: [String!]
  ccLast4_lt: String
  ccLast4_lte: String
  ccLast4_gt: String
  ccLast4_gte: String
  ccLast4_contains: String
  ccLast4_not_contains: String
  ccLast4_starts_with: String
  ccLast4_not_starts_with: String
  ccLast4_ends_with: String
  ccLast4_not_ends_with: String
  stripeId: String
  stripeId_not: String
  stripeId_in: [String!]
  stripeId_not_in: [String!]
  stripeId_lt: String
  stripeId_lte: String
  stripeId_gt: String
  stripeId_gte: String
  stripeId_contains: String
  stripeId_not_contains: String
  stripeId_starts_with: String
  stripeId_not_starts_with: String
  stripeId_ends_with: String
  stripeId_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  sittes_every: SitteWhereInput
  sittes_some: SitteWhereInput
  sittes_none: SitteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    