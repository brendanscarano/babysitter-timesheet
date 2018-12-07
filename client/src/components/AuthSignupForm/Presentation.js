import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Error = styled.div`
  color: red;
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

const Presentation = ({
  handleSubmit,
  handleChange,
  showPassword,
  toggleShowPassword,
  isSubmitting,
  errors,
  touched,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <FormItem label="First Name">
      <Input
        type="text"
        name="firstName"
        onChange={handleChange}
      />
      {errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
    </FormItem>

    <FormItem label="Last Name">
      <Input
        type="text"
        name="lastName"
        onChange={handleChange}
      />
      {errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
    </FormItem>

    <FormItem label="Email">
      <Input
        type="text"
        name="email"
        onChange={handleChange}
      />
      {errors.email && touched.email && <Error>{errors.email}</Error>}
    </FormItem>

    <FormItem label="Password">
      <Input
        type={showPassword ? 'text' : 'password'}
        name="password"
        onChange={handleChange}
        autoComplete="off"
      />
      {errors.password && touched.password && <Error>{errors.password}</Error>}
      <ShowPasswordButton onClick={toggleShowPassword} type="button">
        {showPassword ? 'Hide' : 'Show'}
        {' '}
            Password
      </ShowPasswordButton>
    </FormItem>


    <FormItem label="Confirm Password">
      <Input
        type={showPassword ? 'text' : 'password'}
        name="confirmPassword"
        onChange={handleChange}
        autoComplete="off"
      />
      {errors.confirmPassword && touched.confirmPassword && <Error>{errors.confirmPassword}</Error>}
    </FormItem>

    <Button
      htmlType="submit"
      type="primary"
      disabled={isSubmitting}
    >
        Sign Up
    </Button>
  </StyledForm>
);

Presentation.propTypes = {
  /** From Formik renderComponent props */
  handleChange: PropTypes.func.isRequired,
  /** From Formik renderComponent props */
  handleSubmit: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  toggleShowPassword: PropTypes.func.isRequired,
  /** From Formik renderComponent props */
  isSubmitting: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export { Presentation };
