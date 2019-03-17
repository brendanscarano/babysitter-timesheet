import React from 'react';
import styled from 'styled-components';
import {
  Formik,
} from 'formik';
import {
  Form, Input, Button,
  Notification,
} from 'antd';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { formatDateForUrl } from '../../helpers/formatDateForUrl';

const LOGIN_USER = gql`
  mutation createLogin(
    $email: String!,
    $password: String!,
  ) {
    login(
      email: $email,
      password: $password,
    ) {
      token
    }
  }
`;

const FormItem = Form.Item;

const StyledForm = styled(Form)`
  width: 100%;
  > button {
    width: 100%;
  }
`;

const ShowPasswordButton = styled.button`
    background: transparent;
    border: none;
    text-align: left;
    padding: 0;
    width: auto;
    outline: none;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

class AuthLoginForm extends React.PureComponent {
  state = {
    showPassword: false,
  }

  toggleShowPassword = () => this.setState((prevState) => {
    const showPasswordCopy = prevState.showPassword;
    return { showPassword: !showPasswordCopy };
  });

  render = () => (
    <Mutation mutation={LOGIN_USER}>
      {(createLogin, mutationProps) => (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values, actions) => {
            const response = await createLogin({
              variables: {
                email: values.email,
                password: values.password,
              },
            });

            if (response.data.login.token) {
              Notification.success({
                message: 'Login successful',
                description: 'Welcome to sitter sheet',
              });

              await window.localStorage.setItem('sid', response.data.login.token);
              mutationProps.client.writeData({ data: { isLoggedIn: true } });
              this.props.history.push('/sittes');
            }
          }}
        >
          {props => (
            <StyledForm onSubmit={props.handleSubmit}>
              <FormItem label="Email">
                <Input
                  type="text"
                  name="email"
                  onChange={props.handleChange}
                />
              </FormItem>

              <FormItem label="Password">
                <Input
                  type={this.state.showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={props.handleChange}
                />
                <ShowPasswordButton onClick={this.toggleShowPassword} type="button">
                  {this.state.showPassword ? 'Hide' : 'Show'}
                  {' '}
                  Password
                </ShowPasswordButton>
              </FormItem>

              {mutationProps.error && mutationProps.error.graphQLErrors.map(error => (
                <Error key={error.message}>{error.message}</Error>
              ))}

              <Button
                htmlType="submit"
                type="primary"
              >
                Log In
              </Button>
            </StyledForm>
          )}
        </Formik>
      )}
    </Mutation>
  )
}

export { AuthLoginForm };
