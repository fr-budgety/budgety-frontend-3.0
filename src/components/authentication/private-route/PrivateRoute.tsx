/** @format */
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RegisterFormState } from '../../../redux/store/types';
import { RouteComponentProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteComponentProps<any> {
  component: React.FC;
  firebase: any;
}

/**
 * Take a component and make a route around the component if the user is authorized
 * else redirect to login page
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, firebase, ...rest }) => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => setAuthorized(checkIfUserIsLoggedIn(firebase)));

  /**
   * Given an object check if it contains "uuid" property.
   * @param {object} loggedInObject - Firebase redux state
   * @returns {bool}
   */
  const checkIfUserIsLoggedIn = (loggedInObject: any) => (loggedInObject.uid ? true : false);

  return (
    <Route {...rest} render={(props: any) => (authorized ? <Component {...props} /> : <Redirect to="/auth/login" />)} />
  );
};

const mapStateToProps = (state: RegisterFormState) => ({ firebase: state.firebase.auth });

export default connect(mapStateToProps)(PrivateRoute);
