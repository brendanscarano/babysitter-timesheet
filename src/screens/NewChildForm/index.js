import React from 'react';
import styled from 'styled-components';
import {
  Formik, Field, ErrorMessage,
} from 'formik';
import { Mutation } from 'react-apollo';
import {
  Form, Input, Radio, Button, InputNumber, Layout,
} from 'antd';
import { NavBar } from '../../components/NavBar';
import { CREATE_NEW_CHILD } from './graphql';
import { media } from '../../shared/theme';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  ${media.phone`
    width: 400px;
    margin: auto;
  `};
`;

const VerticalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewChildForm = () => (
  <Mutation mutation={CREATE_NEW_CHILD}>
    {(createChild, mutationProps) => (
      <Layout>
        <NavBar />
        <StyledLayout>
          <h1>New Child</h1>
          <Formik
            initialValues={{ firstName: '', lastName: '', gender: null }}
            validate={(values) => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, actions) => {
              console.log('values', values);
              console.log('actions', actions);
              createChild({
                variables: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  gender: values.gender,
                  rateAmount: values.rateAmount,
                  rateType: values.rateType,
                  /** TODO: Dont hardcode this */
                  ownerId: 'cjntestdudeug0a54rjlfk74x',
                },
              });
            }}
          >
            {({
              values, errors, handleChange, isSubmitting, handleSubmit,
            }) => console.log('values', values) || (
              <VerticalForm onSubmit={handleSubmit}>
                <FormItem label="First Name">
                  <Input
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                  />
                  {errors.name && <div id="feedback">{errors.name}</div>}
                </FormItem>

                <FormItem label="Last Name">
                  <Input
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                  />
                  {errors.name && <div id="feedback">{errors.name}</div>}
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
                </FormItem>

                {values.rateType && (
                  <FormItem label="Hourly Rate">
                    <Field
                      name="rateAmount"
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
                  </FormItem>
                )}

                <Button htmlType="submit" type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </VerticalForm>
            )}
          </Formik>
        </StyledLayout>
      </Layout>
    )}
  </Mutation>
);

export { NewChildForm };
