import React from 'react';
import styled from 'styled-components';
import {
  Formik,
} from 'formik';
import {
  Form, Input, Button,
} from 'antd';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

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
              // TODO: Linter complaining about localStorage not being defined even though its working
              localStorage.setItem('token', response.data.login.token);
              const dateToRedirect = moment().format('MM-YYYY');
              this.props.history.push(`/${dateToRedirect}`);
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
