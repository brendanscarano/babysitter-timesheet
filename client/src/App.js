import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import MyProfile from './screens/MyProfile';
import NewChild from './screens/NewChild';
import LoginSignup from './screens/LoginSignup';
import ChildInfo from './screens/ChildInfo';
import PrivateRoute from './components/PrivateRoute';
import Main from './screens/Main';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <PrivateRoute exact path="/child/:id" component={ChildInfo} />
        <PrivateRoute exact path="/new-child" component={NewChild} />
        <PrivateRoute exact path="/my-profile" component={MyProfile} />
        <PrivateRoute exact path="/:date" component={Main} />
        <Route exact path="/" component={LoginSignup} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
