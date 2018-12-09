import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';
import { AuthLoginForm } from '../../components/AuthLoginForm';
import { AuthSignupForm } from '../../components/AuthSignupForm';
import { StyledPageLayoutWithFixedHeader } from '../../components/StyledPageLayout';
import { NavBar } from '../../components/NavBar';

const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';

const Title = styled.h2`
  font-weight: bold;
`;

const StyledLayout = styled(Layout)`
  height: 100vh;
  overflow: scroll;
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
    activeForm: LOG_IN,
  }

  setLogInActive = () => this.setState({ activeForm: LOG_IN })

  setSignUpActive = () => this.setState({ activeForm: SIGN_UP })

  render() {
    return (
      <StyledLayout>
        <NavBar isUserSignedIn={false} history={this.props.history} />

        <StyledPageLayoutWithFixedHeader>
          <Title>
            {this.state.activeForm === LOG_IN
              ? 'Welcome Back'
              : 'Create an Account'
            }
          </Title>

          {this.state.activeForm === LOG_IN
            ? <AuthLoginForm history={this.props.history} />
            : <AuthSignupForm history={this.props.history} />
          }

          {this.state.activeForm === LOG_IN
            ? (
              <SwitchFormText
                onClick={this.setSignUpActive}
              >
                <i>Don&apos;t have an account?</i>
                {' '}
                <span>Sign up</span>
              </SwitchFormText>
            )
            : (
              <SwitchFormText
                onClick={this.setLogInActive}
              >
                <i>Already have an account?</i>
                {' '}
                <span>Log in</span>
              </SwitchFormText>
            )
          }
        </StyledPageLayoutWithFixedHeader>
      </StyledLayout>
    );
  }
}

export default LoginSignupScreen;
