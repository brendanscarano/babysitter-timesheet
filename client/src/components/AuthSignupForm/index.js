import React from 'react';
import styled from 'styled-components';
import {
  Formik, Field,
} from 'formik';
import {
  Form, Input, Radio, Button, InputNumber,
} from 'antd';
import { Mutation } from 'react-apollo';
import { SIGN_UP_USER } from './graphql';

const FormItem = Form.Item;

const StyledForm = styled(Form)`
  width: 100%;

  > button {
    width: 100%;
  }
`;

class AuthSignupForm extends React.PureComponent {
  state = {
    showPassword: false,
  }

  render = () => (
    <Mutation
      mutation={SIGN_UP_USER}
    >
        {(CreateUser, mutationProps) => {
          console.log('CreateUser', CreateUser)
          console.log('mutationProps', mutationProps)
          return (
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
              }}
              onSubmit={async (values, actions) => {
                console.log('values: ', values)
                console.log('actions: ', actions)
                const response = await CreateUser({
                  variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                  }
                })
                console.log('response', response)
              }}
            >
              {props => (
                <StyledForm onSubmit={props.handleSubmit}>
                  <FormItem label="First Name">
                    <Input
                      type="text"
                      name="firstName"
                      onChange={props.handleChange}
                    />
                  </FormItem>

                  <FormItem label="Last Name">
                    <Input
                      type="text"
                      name="lastName"
                      onChange={props.handleChange}
                    />
                  </FormItem>

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
                  </FormItem>

                  <p
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
                    }
                  >
                    {this.state.showPassword ? 'Hide' : 'Show'} Password
                  </p>

                  <FormItem label="Confirm Password">
                    <Input
                      type={this.state.showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      onChange={props.handleChange}
                    />
                  </FormItem>

                  <Button
                    htmlType="submit"
                    type="primary"
                    disabled={props.isSubmitting}
                  >
                    Sign Up
                  </Button>
                </StyledForm>
              )}
            </Formik>

          )
        }}
    </Mutation>
  )
}

export { AuthSignupForm };
