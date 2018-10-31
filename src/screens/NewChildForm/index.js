import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Mutation } from 'react-apollo';
import { NavBar } from '../../components/NavBar';
import { CREATE_NEW_CHILD } from './graphql';

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
            {({ isSubmitting }) => (
              <VerticalForm>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" />

                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" />

                <FlexRow>
                  <Field type="radio" name="gender" id="boy" value="MALE" />
                  <label htmlFor="boy">Boy</label>

                  <Field type="radio" name="gender" id="girl" value="FEMALE" />
                  <label htmlFor="girl">Girl</label>
                </FlexRow>

                {/* <label htmlFor="rateAmount">Rate:</label>
                <Field component="select" id="rateAmount" name="rateAmount">
                  {hourlySelections().map(value => (
                    <option key={value} value={value}>{`$${value}`}</option>
                  ))}
                </Field> */}


                <button type="submit" disabled={isSubmitting}>
                  Add
                </button>
              </VerticalForm>
            )}
          </Formik>
        </StyledLayout>
      </Layout>
    )}
  </Mutation>
);

export { NewChildForm };
