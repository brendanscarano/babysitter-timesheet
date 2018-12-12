import ApolloClient from 'apollo-boost';
import { typeDefs } from './resolvers';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER,
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
