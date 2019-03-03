import React from 'react';
import { Modal, notification } from 'antd';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import { GET_SITTES } from '../../screens/Main/graphql';
import { CREATE_NEW_CHILD } from '../../screens/NewChild/graphql';
import { NewChildForm } from '../NewChildForm';

export const NewSitteModal = ({
  visable,
  onToggle,
}) => (
  <Modal
    centered
    visible={visable}
    onCancel={() => onToggle(false)}
    footer={null}
  >
    <Mutation
      refetchQueries={[
        {
          query: GET_SITTES,
        },
      ]}
      mutation={CREATE_NEW_CHILD}
    >
      {createSitte => (
          <>
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
              onSubmit={async (values) => {
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
                  notification.success({
                    message: 'Success',
                    description: `Added ${values.firstName} ${values.lastName}`,
                  });

                  onToggle(false);
                }
              }}
            >
              {props => (
                <NewChildForm
                  {...props}
                />
              )}
            </Formik>
          </>
      )}
    </Mutation>
  </Modal>
);
