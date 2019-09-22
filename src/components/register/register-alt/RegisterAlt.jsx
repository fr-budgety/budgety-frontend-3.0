/** @format */

import React from 'react';
import { Button } from 'reactstrap';

const RegisterAlt = () => {
  return (
    <div className="text-center">
      <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
        <span className="btn-inner--icon">
          TO DO
          <img alt="..." src={require('assets/img/icons/common/google.svg')} />
        </span>
        <span className="btn-inner--text">Google</span>
      </Button>
    </div>
  );
};
export default RegisterAlt;
