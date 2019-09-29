/** @format */

import React, { useState } from 'react';
import { RegisterFormState } from '../../../../redux/store/types';

import { Formik } from 'formik';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { signUp } from '../../../../redux/actions/authActions';

import { Button, FormGroup, Form, Input, InputGroup, Alert } from 'reactstrap';
import { SignupSchema } from '../../../../utils/validation/validationSchemas.yup';
import { RouteComponentProps } from 'react-router-dom';
import RegisterPasswordMeter from '../register-password-meter/RegisterPasswordMeter';

interface RegisterFormProps extends RouteComponentProps<any> {
  signUp: (email: string, password: string) => void;
  auth: RegisterFormState;
}

const RegisterForm: React.SFC<RegisterFormProps> = (props) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string | undefined>(undefined);

  /**
   * Async
   * @function handleSignup
   */
  const handleSignUp = async ({ email, password }: { email: string; password: string }) => {
    try {
      await props.signUp(email, password);
      setMessage(undefined);
    } catch (error) {
      setMessage(error.message);
      setType('danger');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSignUp(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form role="form" onSubmit={handleSubmit} noValidate>
          <div className="text-center" data-test="messages">
            {message && <Alert color={type}>{message}</Alert>}
            {props.auth.authError && (
              <Alert data-test="messages" color="danger">
                {props.auth.authError}
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
          <FormGroup className="ConfirmPasswordFormGroup">
            <InputGroup>
              <Input
                placeholder="Re-type password"
                type="password"
                name="confirmPassword"
                data-test="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.confirmPassword}
                invalid={touched.confirmPassword && errors.confirmPassword ? true : false}
              />
            </InputGroup>
            {errors.confirmPassword && touched.confirmPassword && (
              <small className="error-message">{errors.confirmPassword}</small>
            )}
          </FormGroup>
          <RegisterPasswordMeter password={values.password} />
          <div className="text-center">
            <Button className="mt-4" color="primary" type="submit" disabled={isSubmitting}>
              Create account
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state: RegisterFormState) => ({ firebase: state.firebase.auth, auth: state.auth });
const mapDispatchToProps = (dispatch: ThunkDispatch<RegisterFormState, undefined, any>) => {
  return {
    signUp: (email: string, password: string) => dispatch(signUp(email, password)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterForm)
);
