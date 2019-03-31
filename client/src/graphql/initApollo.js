import ApolloClient from 'apollo-boost';
import { typeDefs } from './resolvers';

const { REACT_APP_ENV, REACT_APP_GRAPHQL_SERVER_PROD, REACT_APP_GRAPHQL_SERVER_DEV } = process.env;

export const client = new ApolloClient({
  uri: REACT_APP_ENV === 'production' ? REACT_APP_GRAPHQL_SERVER_PROD : REACT_APP_GRAPHQL_SERVER_DEV,
  credentials: 'include',
  clientState: {
    defaults: {
      isLoggedIn: !!window.localStorage.getItem('sid'),
    },
    resolvers: {
      Query: {
        isLoggedIn: () => !!window.localStorage.getItem('sid'),
      },
    },
    typeDefs,
  },
});
