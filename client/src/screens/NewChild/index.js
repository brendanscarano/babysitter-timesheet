import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { StyledPageLayout } from '../../components/StyledPageLayout';
import { NewChildForm } from '../../components/NewChildForm';
import { CREATE_NEW_CHILD } from './graphql';
import { formatDateForUrl } from '../../helpers/formatDateForUrl';

/**
 * @param {obj} props - history, location, match
 */
const NewChild = props => (
  <Mutation mutation={CREATE_NEW_CHILD}>
    {(createSitte, mutationProps) => (
      <StyledPageLayout>
        <h1>New Sitte</h1>
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
            const response = await createSitte({
              variables: {
                firstName: values.firstName,
                lastName: values.lastName,
                gender: values.gender,
                rateAmount: values.rateAmount,
                rateType: values.rateType,
              },
            });

            if (response.data.createSitte) {
            // TODO: PASS PROP TO ROUTE TO DISPLAY MESSAGE THAT CHILD WAS CREATED
              props.history.push(`/${formatDateForUrl}`);
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
    )}
  </Mutation>
);

export default NewChild;
