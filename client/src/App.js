import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import MyProfile from './screens/MyProfile';
// import NewChild from './screens/NewChild';
import LoginSignup from './screens/LoginSignup';
import ChildInfo from './screens/ChildInfo';
import Main from './screens/Main';
import Welcome from './screens/Welcome';
import Sittes from './screens/Sittes';
import FourOFour from './screens/FourOFour';
import { Layout } from './components/Layout';
import { RequireSubscription } from './hocs/RequireSubscription';
import { RedirectIfLoggedIn } from './hocs/RedirectIfLoggedIn';
import { client } from './graphql/initApollo';
import { Logout } from './screens/Logout/index';
import { Loader } from './components/Loader';

const IS_LOGGED_IN = gql`
	{
		isLoggedIn @client
	}
`;

const loggedInRoutes = isLoggedIn => isLoggedIn && (
    <Route
      path="/"
      component={RequireSubscription(() => (
        <Switch>
          <Route exact path="/_sheet/:date" component={Main} />
          {/* <Route exact path="/new-sitte" component={NewChild} /> */}
  <Route exact path="/sittes" component={Sittes} />
          <Route exact path="/sitte/:id" component={ChildInfo} />
          <Route exact path="/account" render={MyProfile} />
          <Route exact path="/logout" component={Logout} />
  <Route component={FourOFour} />
        </Switch>
      ))}
    />
  );

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      {/** Add user state here  */}
      <Query query={IS_LOGGED_IN}>
        {({ data, loading, error }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return 'Something went wrong';
          }

          return (
            <Switch>
              <Route exact path="/" component={RedirectIfLoggedIn(() => <Welcome />)} />
              <Layout isLoggedIn={data.isLoggedIn}>
                {loggedInRoutes(data.isLoggedIn)}
                <Route
                  exact
                  path="/register"
                  component={RedirectIfLoggedIn(props => <LoginSignup {...props} />)}
                />
              </Layout>
            </Switch>
          );
        }}
      </Query>
    </Router>
  </ApolloProvider>
);

export default App;
