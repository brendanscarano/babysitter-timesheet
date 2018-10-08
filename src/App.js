import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Home } from './screens/home';
import { Child } from './screens/child';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Child} />
    </>
  </Router>
);

export default App;
