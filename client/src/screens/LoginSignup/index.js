import React from 'react';
import styled from 'styled-components';
import { AuthLoginForm } from '../../components/AuthLoginForm';
import { AuthSignupForm } from '../../components/AuthSignupForm';
import { StyledPageLayoutWithFixedHeader } from '../../components/StyledPageLayout';

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
    activeForm: LOG_IN,
  }

  setLogInActive = () => this.setState({ activeForm: LOG_IN })

  setSignUpActive = () => this.setState({ activeForm: SIGN_UP })

  render() {
    return (
      <StyledPageLayoutWithFixedHeader>

        <Title>
          {this.state.activeForm === LOG_IN
            ? 'Welcome Back'
            : 'Create an Account'
          }
        </Title>

        {this.state.activeForm === LOG_IN
          ? 'Welcome Back'
          : 'Create an Account'
        }

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
    );
  }
}

export default LoginSignupScreen;
