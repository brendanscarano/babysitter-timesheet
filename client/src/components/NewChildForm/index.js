import React from 'react';
import styled from 'styled-components';
import {
  Field,
} from 'formik';
import {
  Form, Input, Radio, Button, InputNumber,
} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const VerticalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.div`
  color: red;
`;

const validateRateAmount = (value) => {
  let error;
  if (typeof value !== 'number') {
    error = 'The rate amount has to be a number!';
  }
  if (!value) {
    error = 'How much will you be charging?';
  }
  return error;
};

/**
 * @param {obj} props - history, location, match
 */
const NewChildForm = ({
  values, errors, touched, handleChange, isSubmitting, handleSubmit,
}) => (
  <VerticalForm onSubmit={handleSubmit}>
    <FormItem label="First Name">
      <Input
        type="text"
        onChange={handleChange}
        name="firstName"
        autoComplete="off"
      />
      {errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
    </FormItem>

    <FormItem label="Last Name">
      <Input
        type="text"
        onChange={handleChange}
        name="lastName"
        autoComplete="off"
      />
      {errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
    </FormItem>

    <FormItem label="Gender">
      <Field
        name="gender"
        render={renderProps => (
          <RadioGroup name="gender" onChange={props => renderProps.form.setFieldValue(props.target.name, props.target.value)}>
            <Radio value="MALE">
              <span role="img" aria-label="boy">👦 boy</span>
            </Radio>
            <Radio value="FEMALE">
              <span role="img" aria-label="girl">👧 girl</span>
            </Radio>
          </RadioGroup>
        )}
      />
      {errors.gender && touched.gender && <Error>{errors.gender}</Error>}
    </FormItem>

    <FormItem label="Rate Type">
      <Field
        name="rateType"
        render={renderProps => (
          <RadioGroup
            name="rateType"
            onChange={(props) => {
              renderProps.form.setFieldValue(props.target.name, props.target.value);
              renderProps.form.setFieldValue('rateAmount', props.target.value === 'HOURLY' ? 8 : 40);
            }}
          >
            <Radio value="HOURLY">
                                Hourly
            </Radio>
            <Radio value="FLAT">
                                Flat
            </Radio>
          </RadioGroup>
        )}
      />
      {errors.rateType && touched.rateType && <Error>{errors.rateType}</Error>}
    </FormItem>

    {values.rateType && (
      <FormItem label={`${values.rateType === 'HOURLY' ? 'Hourly' : 'Flat'} Rate`}>
        <Field
          name="rateAmount"
          validate={validateRateAmount}
          render={renderProps => (
            <InputNumber
              name="rateAmount"
              value={values.rateAmount}
              defaultValue={values.rateType === 'HOURLY' ? 8 : 40}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={value => renderProps.form.setFieldValue('rateAmount', value)}
            />
          )}
        />
        {errors.rateAmount && <Error>{errors.rateAmount}</Error>}
      </FormItem>
    )}

    <Button htmlType="submit" type="primary" disabled={isSubmitting}>
                Submit
    </Button>
  </VerticalForm>
);

export { NewChildForm };
