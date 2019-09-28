/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import { CardHeader, CardBody } from 'reactstrap';
import OAuthSignIn from '../oAuth/OAuthSignIn';
import LoginForm from './login-form/LoginForm';

const LoginModule: React.SFC = () => {
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div id="WelcomeMessage" className="text-muted text-center mt-2 mb-4">
          <small>Sign in with</small>
        </div>
        <OAuthSignIn />
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div id="SignInMessage" className="text-muted text-center mb-4">
          <small>Or sign in with credentials</small>
        </div>
        <LoginForm className="mt-4 mb-4" />
        <Link data-test="login-link" to="/auth/register" className="d-flex justify-content-center">
          <small className="text-center">I don't have an account.</small>
        </Link>
      </CardBody>
    </>
  );
};
export default LoginModule;
