/** @format */

import React from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import RegisterForm from './register-form/RegisterForm';
import RegisterAlt from './register-alt/RegisterAlt';

const RegisterModule = () => {
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div className="text-muted text-center mt-2 mb-4">
          <small>Sign up with</small>
        </div>
        <RegisterAlt />
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div className="text-center text-muted mb-4">
          <small>Or sign up with credentials</small>
        </div>
        <RegisterForm />
      </CardBody>
    </>
  );
};

export default RegisterModule;
