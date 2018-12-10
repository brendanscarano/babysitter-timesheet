import gql from 'graphql-tag';

export const FETCH_USER_QUERY = gql`
  {
    me {
      firstName
      lastName
    }
  }
`;
