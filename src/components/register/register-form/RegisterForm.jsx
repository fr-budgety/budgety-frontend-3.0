/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { withRouter } from 'react-router';

import { Button, FormGroup, Form, Input, InputGroup, Alert } from 'reactstrap';
import { SignupSchema } from '../../../utils/validation/validationSchemas.yup';
import RegisterPasswordMeter from '../register-password-meter/RegisterPasswordMeter';

const RegisterForm = ({ ...props }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  /**
   * Async
   * @function handleSignup
   */
  const handleSignUp = async ({ email, password }) => {
    try {
      //await app.auth().createUserWithEmailAndPassword(email, password);
      props.history.push('/auth/login');
      setMessage(null);
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
                invalid={touched.email && errors.email}
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
                invalid={touched.password && errors.password}
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
                invalid={touched.confirmPassword && errors.confirmPassword}
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

RegisterForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(RegisterForm);
