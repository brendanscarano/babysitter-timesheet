import React from 'react';
import styled from 'styled-components';
import {
  Formik, Field,
} from 'formik';
import {
  Form, Input, Radio, Button, InputNumber,
} from 'antd';

const FormItem = Form.Item;

const AuthLoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={() => console.log('submitting!')}
  >
    {props => console.log('props', props) || (
      <Form>
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

        <Button htmlType="submit" type="primary" disabled={props.isSubmitting}>
          Sign In
        </Button>
      </Form>
    )}
  </Formik>
);

export { AuthLoginForm };
