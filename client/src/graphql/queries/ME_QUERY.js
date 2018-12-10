import gql from 'graphql-tag';

export const ME_QUERY = gql`
{
  me {
    id
    firstName
    lastName
    type
  }
}
`;
