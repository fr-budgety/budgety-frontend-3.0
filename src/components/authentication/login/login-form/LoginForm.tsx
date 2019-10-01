/** @format */
/** @format */

import React, { useState } from 'react';

import { Formik } from 'formik';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { signIn, signOut } from '../../../../redux/actions/authActions';
import { LoginFormState } from '../../../../redux/store/types';

import { Button, FormGroup, Form, Input, InputGroup, Alert } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';
import { SigninSchema } from '../../../../utils/validation/validationSchemas.yup';

interface LoginFormProps extends RouteComponentProps<any> {
  className?: string;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  auth: LoginFormState;
}

const LoginForm: React.FC<LoginFormProps> = ({ className, signIn, signOut, auth }) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string | undefined>(undefined);

  /**
   * Async
   * @function handleSignup
   */
  const handleSignIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      await signIn(email, password);
      setMessage(undefined);
    } catch (error) {
      setMessage(error.message);
      setType('danger');
    }
  };

  /**
   * Async
   * @function handleSignup
   */
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleSignOut}>Signout</button>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSignIn(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form role="form" onSubmit={handleSubmit} noValidate className={className}>
            <div className="text-center" data-test="messages">
              {message && <Alert color={type}>{message}</Alert>}
              {auth.authError && (
                <Alert data-test="messages" color="danger">
                  {auth.authError}
                </Alert>
              )}
            </div>
            <FormGroup className="EmailFormGroup">
              <InputGroup>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  data-test="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched.email}
                  invalid={touched.email && errors.email ? true : false}
                />
              </InputGroup>
              {errors.email && touched.email && <small className="error-message">{errors.email}</small>}
            </FormGroup>
            <FormGroup className="PasswordFormGroup">
              <InputGroup>
                <Input
                  placeholder="Password"
                  data-test="password"
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  touched={touched.password}
                  invalid={touched.password && errors.password ? true : false}
                />
              </InputGroup>
              {errors.password && touched.password && <small className="error-message">{errors.password}</small>}
            </FormGroup>
            <div className="text-center">
              <Button className="mt-4" color="primary" type="submit" disabled={isSubmitting}>
                Sign in
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
const mapDispatchToProps = (dispatch: ThunkDispatch<LoginFormState, undefined, any>) => {
  return {
    signIn: (email: string, password: string) => dispatch(signIn(email, password)),
    signOut: () => dispatch(signOut()),
  };
};
const mapStateToProps = (state: LoginFormState) => ({ firebase: state.firebase.auth, auth: state.auth });

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
