import gql from 'graphql-tag';

export const SIGN_UP_USER = gql`
  mutation CreateUser(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
  ) {
    createUser(data: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email
    }) {
        id
        firstName
        lastName
    }
}`;
