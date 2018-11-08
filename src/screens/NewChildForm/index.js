import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import {
  Formik, Field, ErrorMessage,
} from 'formik';
import { Mutation } from 'react-apollo';
import {
  Form, Input, Radio, Button, InputNumber,
} from 'antd';
import { NavBar } from '../../components/NavBar';
import { CREATE_NEW_CHILD } from './graphql';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 100%;
    margin: 2rem 0;
`;

const VerticalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const hourlySelections = () => new Array(40).fill(null).map((_, idx) => idx + 1);

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
            onSubmit={(values, props) => {
              console.log('props', props);
              console.log('values', values);
              createChild({
                variables: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  gender: values.gender,
                  /** TODO: Dont hardcode this */
                  rateAmount: 7,
                  /** TODO: Dont hardcode this */
                  ownerId: 'cjntestdudeug0a54rjlfk74x',
                },
              });
            }}
          >
            {({
              values, errors, handleChange, handleBlur, isSubmitting,
            }) => console.log('values', values) || (
              <VerticalForm>
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

                <RadioGroup>
                  <Field type="radio" name="gender" id="boy" value="MALE" />
                  <label htmlFor="boy">Boy</label>

                  <Field type="radio" name="gender" id="girl" value="FEMALE" />
                  <label htmlFor="girl">Girl</label>
                </RadioGroup>

                <FormItem label="Gender">
                  <RadioGroup name="gender" onChange={props => console.log('changing to', props)}>
                    <Radio value="MALE">👦 Boy</Radio>
                    <Radio value="FEMALE">👧 Girl</Radio>
                  </RadioGroup>
                </FormItem>

                <FormItem label="Hourly Rate">
                  <InputNumber
                    name="hourlyRate"
                    defaultValue={8}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value) => {
                      console.log('changed', value);
                    }}
                  />
                </FormItem>

                {/* <label htmlFor="rateAmount">Rate:</label>
                <Field component="select" id="rateAmount" name="rateAmount">
                  {hourlySelections().map(value => (
                    <option key={value} value={value}>{`$${value}`}</option>
                  ))}
                </Field> */}


                <Button type="submit" disabled={isSubmitting}>
                  Add
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
