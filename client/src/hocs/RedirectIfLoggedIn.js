import React from 'react';
import { withRouter } from 'react-router-dom';


const C = WrappedComponent => withRouter((props) => {
  const token = window.localStorage.getItem('sid');
  if (token) {
    props.history.push('/sittes');
  }

  return (<WrappedComponent {...props} />);
});

export const RedirectIfLoggedIn = C;
