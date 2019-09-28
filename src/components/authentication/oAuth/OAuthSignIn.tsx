/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { signInWithGoogle } from '../../../redux/actions/authActions';

import { Button } from 'reactstrap';

interface OAuthSignInProps {
  signInWithGoogle: (event: React.MouseEvent<any, MouseEvent>) => void;
}
const OAuthSignIn: React.SFC<OAuthSignInProps> = ({ signInWithGoogle }) => {
  return (
    <div className="text-center">
      <Button
        className="btn-neutral btn-icon"
        color="default"
        href="#"
        onClick={signInWithGoogle}
        data-test="google-oauth"
      >
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
    signInWithGoogle: () => dispatch(signInWithGoogle()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OAuthSignIn);
