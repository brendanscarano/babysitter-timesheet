import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { Layout } from 'antd';
import { NavBar } from '../../components/NavBar';
import { StyledPageLayout } from '../../components/StyledPageLayout';
import { NewChildForm } from '../../components/NewChildForm';
import { CREATE_NEW_CHILD } from './graphql';

/**
 * @param {obj} props - history, location, match
 */
const NewChild = props => (
  <Mutation mutation={CREATE_NEW_CHILD}>
    {(createChild, mutationProps) => (
      <Layout>
        <NavBar isUserSignedIn />
        <StyledPageLayout>
          <h1>New Child</h1>
          <Formik
            initialValues={{ firstName: '', lastName: '', gender: null }}
            validate={(values) => {
              const errors = {};

              if (!values.firstName) {
                errors.firstName = 'What\'s the child\'s first name?';
              }
              if (!values.lastName) {
                errors.lastName = 'What\'s the child\'s last name?';
              }
              if (!values.gender) {
                errors.gender = 'Is this child a boy or a girl?';
              }
              if (!values.rateType) {
                errors.rateType = 'Will you charge by hour or a flat rate?';
              }
              if (typeof values.rateAmount !== 'number') {
                errors.rateAmount = 'The rate amount has to be a number!';
              }
              if (!values.rateAmount) {
                errors.rateAmount = 'How much will you be charging?';
              }
              return errors;
            }}
            onSubmit={async (values, actions) => {
              const response = await createChild({
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

              if (response.data.createChild) {
                // TODO: PASS PROP TO ROUTE TO DISPLAY MESSAGE THAT CHILD WAS CREATED
                props.history.push('/');
              }
            }}
          >
            {({
              values, errors, touched, handleChange, isSubmitting, handleSubmit,

            }) => (
              <NewChildForm
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
              />
            )}
          </Formik>
        </StyledPageLayout>
      </Layout>
    )}
  </Mutation>
);

export default NewChild;
