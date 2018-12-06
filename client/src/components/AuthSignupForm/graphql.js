import gql from 'graphql-tag';

export const SIGN_UP_USER = gql`
  mutation Signup(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!,
  ) {
    signup(
        firstName: $firstName,
        lastName: $lastName,
        email: $email
        password: $password
    ) {
        token
        user {
            email
            firstName
        }
    }
}`;
