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

const Title = styled.h2`
  font-weight: bold;
`;

const SwitchFormText = styled.p`
  margin-top: 2rem;
  > span {
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;

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

          <Title>
            {this.state.activeForm === LOG_IN
              ? "Welcome Back"
              : "Create an Account"
            }
          </Title>

          {this.state.activeForm === LOG_IN
            ? <AuthLoginForm />
            : <AuthSignupForm />
          }

          {this.state.activeForm === LOG_IN
            ?
              <SwitchFormText
                onClick={this.setSignUpActive}
              >
                Don't have an account? <span>Sign up</span>
              </SwitchFormText>
            :
              <SwitchFormText
                onClick={this.setLogInActive}
              >
                Already have an account? <span>Log in</span>
              </SwitchFormText>
          }
        </StyledPageLayout>
      </Layout>
    );
  }
}

export default LoginSignupScreen;
