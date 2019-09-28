/** @format */

import React from 'react';

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
      </CardBody>
    </>
  );
};
export default RegisterModule;
