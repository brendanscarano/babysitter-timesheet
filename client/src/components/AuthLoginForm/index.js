import React from 'react';
import styled from 'styled-components';
import {
  Formik,
} from 'formik';
import {
  Form, Input, Button,
} from 'antd';

const FormItem = Form.Item;

const StyledForm = styled(Form)`
  width: 100%;

  > button {
    width: 100%;
  }
`;

const AuthLoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={() => console.log('submitting!')}
  >
    {props => console.log('props', props) || (
      <StyledForm>
        <FormItem label="Email">
          <Input
            type="text"
            name="email"
          />
        </FormItem>

        <FormItem label="Password">
          <Input
            type="text"
            name="password"
          />
        </FormItem>

        <Button
          htmlType="submit"
          type="primary"
          disabled={props.isSubmitting}
        >
          Log In
        </Button>
      </StyledForm>
    )}
  </Formik>
);

export { AuthLoginForm };
