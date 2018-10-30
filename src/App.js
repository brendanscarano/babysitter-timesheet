import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Child } from './screens/child';
import { Home } from './screens/home';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/brendan-f224bf/hello-world/dev',
  // cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Child} />
      </>
    </Router>
  </ApolloProvider>
);

export default App;
