import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import { SIGN_UP_USER } from './graphql';
import { Presentation } from './Presentation';

class AuthSignupForm extends React.PureComponent {
  state = {
    showPassword: false,
  }

  toggleShowPassword = () => this.setState((prevState) => {
    const showPasswordCopy = prevState.showPassword;
    return { showPassword: !showPasswordCopy };
  });

  render = () => (
    <Mutation mutation={SIGN_UP_USER}>
      {(CreateUser, mutationProps) => (
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

            if (!values.firstName) {
              errors.firstName = 'You must have a first name.';
            }

            if (!values.lastName) {
              errors.lastName = 'You must have a last name.';
            }

            if (!values.email) {
              errors.email = "What's your email?";
            }

            if (!values.password) {
              errors.password = 'Huh? No passowrd?!?';
            }

            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Your passwords much match!';
            }

            return errors;
          }}
          onSubmit={async (values, actions) => {
            const response = await CreateUser({
              variables: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              },
            });
            // TODO: ON SUCCESS -> SAVE TOKEN SOMEWHERE FOR PERSISTENCE
            if (response.data.signup.token) {
              const dateToRedirect = moment().format('MM-YYYY');
              this.props.history.push(`/${dateToRedirect}`);
            }
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
              touched={props.touched}
            />
          )}
        </Formik>
      )}
    </Mutation>
  )
}

export { AuthSignupForm };
