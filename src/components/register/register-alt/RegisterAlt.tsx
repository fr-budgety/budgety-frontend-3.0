/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { signUpWithGoogle } from '../../../redux/actions/authActions';

import { Button } from 'reactstrap';

interface RegisterAltProps {
  signUpWithGoogle: (event: React.MouseEvent<any, MouseEvent>) => void;
}
const RegisterAlt: React.SFC<RegisterAltProps> = ({ signUpWithGoogle }) => {
  return (
    <div className="text-center">
      <Button className="btn-neutral btn-icon" color="default" href="#" onClick={signUpWithGoogle}>
        <span className="btn-inner--icon">
          <img alt="..." src={require('assets/img/icons/common/google.svg')} />
        </span>
        <span className="btn-inner--text">Google</span>
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch: ThunkDispatch<undefined, undefined, any>) => {
  return {
    signUpWithGoogle: () => dispatch(signUpWithGoogle()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterAlt);
