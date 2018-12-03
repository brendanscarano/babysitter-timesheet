import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { SIGN_UP_USER } from './graphql';
import { Presentation } from './Presentation';

class AuthSignupForm extends React.PureComponent {
  state = {
    showPassword: false,
  }

  toggleShowPassword = () =>
    this.setState({ showPassword: !this.state.showPassword });

  render = () => (
    <Mutation mutation={SIGN_UP_USER}>
      {(CreateUser, mutationProps) => {
        console.log('CreateUser', CreateUser)
        console.log('mutationProps', mutationProps)
        return (
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validate={(values) => {
              const errors = {};

              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords much match'
              }

              return errors;
            }}
            onSubmit={async (values, actions) => {
              console.log('values: ', values)
              console.log('actions: ', actions)
              const response = await CreateUser({
                variables: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password,
                }
              })
              console.log('response', response)
              // On success redirect to main page
            }}
          >
            {props => (
              <Presentation
                handleSubmit={props.handleSubmit}
                handleChange={props.handleChange}
                showPassword={this.state.showPassword}
                toggleShowPassword={this.toggleShowPassword}
                isSubmitting={props.isSubmitting}
                errors={props.errors}
              />
            )}
          </Formik>
        )
      }}
    </Mutation>
  )
}

export { AuthSignupForm };
