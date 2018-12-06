import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import MyProfile from './screens/MyProfile';
import NewChild from './screens/NewChild';
import LoginSignup from './screens/LoginSignup';
import ChildInfo from './screens/ChildInfo';
import Main from './screens/Main';
import { Layout } from './components/Layout';
import { RequireSubscription } from './hocs/RequireSubscription';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Layout isUserSignedIn>
          {/** Add user state here  */}
          <Route exact path="/register" component={LoginSignup} />
          <Route exact path="/welcome" render={() => <div>Hello world</div>} />
          <Route
            path="/"
            component={RequireSubscription(() => (
              <Switch>
                {/* Redirect if no user logged in */}
                {/* <Redirect from="/" to="/Oct-2018" /> */}
                <Route exact path="/child/:id" component={ChildInfo} />
                <Route exact path="/new-child" component={NewChild} />
                <Route exact path="/my-profile" component={MyProfile} />
                <Route exact path="/:date" component={Main} />
              </Switch>
            ))}
          />
        </Layout>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
