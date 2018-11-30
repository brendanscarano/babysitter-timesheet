/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';
import { AuthLoginForm } from '../../components/AuthLoginForm';
import { AuthSignupForm } from '../../components/AuthSignupForm';
import { StyledPageLayout } from '../../components/StyledPageLayout';
import { NavBar } from '../../components/NavBar';
const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';

class LoginSignupScreen extends React.PureComponent {
  state = {
    activeForm: LOG_IN
  }

  setLogInActive = () => this.setState({ activeForm: LOG_IN })

  setSignUpActive = () => this.setState({ activeForm: SIGN_UP })

  render() {
    return (
      <Layout>
        <NavBar />
        <StyledPageLayout>
          {this.state.activeForm === LOG_IN && (
            <>
            <AuthLoginForm />
            <p onClick={this.setSignUpActive}>
              Don't have an account? Sign up
            </p>
            </>
          )}

          {this.state.activeForm === SIGN_UP && (
            <>
            <AuthSignupForm />
              <p onClick={this.setLogInActive}>
                Already have an account? Log in
            </p>
            </>
          )}
        </StyledPageLayout>
      </Layout>
    );
  }
}

export default LoginSignupScreen;
