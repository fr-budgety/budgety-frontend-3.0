/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

const RegisterPasswordMeter = ({ password }) => {
  const passwordStrengthLabel = ({ score }) => {
    switch (score) {
      case 0:
        return { color: 'text-danger', value: 'Weak' };
      case 1:
        return { color: 'text-danger', value: 'Weak' };
      case 2:
        return { color: 'text-warning', value: 'Fair' };
      case 3:
        return { color: 'text-success', value: 'Good' };
      case 4:
        return { color: 'text-success', value: 'Strong' };
      default:
        return { color: 'text-danger', value: 'Strong' };
    }
  };
  // Get result from typed password
  const testedResult = zxcvbn(password);

  // Get labelled result
  const humanizedResult = passwordStrengthLabel(testedResult);

  return (
    <div className="text-muted font-italic" data-test="password-meter">
      <small>
        password strength: <span className={`font-weight-700 ${humanizedResult.color}`}>{humanizedResult.value}</span>
      </small>
    </div>
  );
};

RegisterPasswordMeter.propTypes = {
  password: PropTypes.string,
};

export default RegisterPasswordMeter;
