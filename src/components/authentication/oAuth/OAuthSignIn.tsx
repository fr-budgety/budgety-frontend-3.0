/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import { signInWithGoogle } from '../../../redux/actions/authActions';

import { Button } from 'reactstrap';

interface OAuthSignInProps extends RouteComponentProps<any> {
  signInWithGoogle: (event: React.MouseEvent<any, MouseEvent>) => void;
  history: any;
}
const OAuthSignIn: React.SFC<OAuthSignInProps> = ({ signInWithGoogle, history }) => {
  return (
    <div className="text-center">
      <Button
        className="btn-neutral btn-icon"
        color="default"
        href="#"
        onClick={() => signInWithGoogle(history)}
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
    signInWithGoogle: (history: any) => dispatch(signInWithGoogle(history)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(OAuthSignIn));
