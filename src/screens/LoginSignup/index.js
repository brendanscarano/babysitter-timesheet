/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthLoginForm } from '../../components/AuthLoginForm';
import { AuthSignupForm } from '../../components/AuthSignupForm';

const LoginSignupScreen = () => (
  <div>
    <h1>LoginSignupScreen</h1>
    <AuthLoginForm />
    <AuthSignupForm />
  </div>
);

export { LoginSignupScreen };
