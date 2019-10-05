/** @format */

import React from 'react';

import { Link } from 'react-router-dom';

import { CardHeader, CardBody } from 'reactstrap';
import RegisterForm from './register-form/RegisterForm';
import OAuthSignIn from '../oAuth/OAuthSignIn';

const RegisterModule: React.SFC = () => {
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div id="WelcomeMessage" className="text-muted text-center mt-2 mb-4">
          <small>Sign in with</small>
        </div>
        <OAuthSignIn />
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div id="SignUpMessage" className="text-center text-muted mb-4">
          <small>Or sign up with credentials</small>
        </div>
        <RegisterForm />
        <Link data-test="login-link" to="/" className="d-flex justify-content-center mt-4">
          <small className="text-center">I already have an account</small>
        </Link>
      </CardBody>
    </>
  );
};
export default RegisterModule;
