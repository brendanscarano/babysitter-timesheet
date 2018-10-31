import gql from 'graphql-tag';

export const CREATE_NEW_CHILD = gql`
    mutation CreateChild(
    $firstName: String!,
    $lastName: String!,
    # $birthday: DateTime,
    $rateAmount: Float!,
    $gender: Gender!,
    $ownerId: ID!,
) {
  createChild(data: {
    firstName: $firstName,
    lastName: $lastName,
    rateAmount: $rateAmount,
    gender: $gender,
    owner: {
      connect: {
        id: $ownerId
      }
    }
  }) {
    firstName
    lastName
  }
}
`;
