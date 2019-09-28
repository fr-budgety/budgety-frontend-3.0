/** @format */

import React from 'react';

import { CardHeader, CardBody } from 'reactstrap';

const LoginModule: React.SFC = () => {
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div id="WelcomeMessage" className="text-muted text-center mt-2 mb-4">
          <small>Sign in with</small>
        </div>
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div id="SignInMessage" className="text-center text-muted mb-4">
          <small>Or sign in with credentials</small>
        </div>
      </CardBody>
    </>
  );
};
export default LoginModule;
