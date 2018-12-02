import React from 'react';
import styled from 'styled-components';
import {
  Formik, Field,
} from 'formik';
import {
  Form, Input, Radio, Button, InputNumber,
} from 'antd';

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
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={() => console.log('submitting!')}
    >
      {props => console.log('props', props) || (
        <StyledForm>
          <FormItem label="First Name">
            <Input
              type="text"
              name="firstName"
            />
          </FormItem>

          <FormItem label="Last Name">
            <Input
              type="text"
              name="lastName"
            />
          </FormItem>

          <FormItem label="Email">
            <Input
              type="text"
              name="email"
            />
          </FormItem>

          <FormItem label="Password">
            <Input
              type={this.state.showPassword ? 'text' : 'password'}
              name="password"
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
}

export { AuthSignupForm };
