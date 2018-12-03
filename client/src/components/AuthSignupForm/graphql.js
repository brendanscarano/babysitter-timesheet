import gql from 'graphql-tag';

export const SIGN_UP_USER = gql`
  mutation CreateUser(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!,
  ) {
    createUser(data: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email
        password: $password
    }) {
        id
        firstName
        lastName
    }
}`;
