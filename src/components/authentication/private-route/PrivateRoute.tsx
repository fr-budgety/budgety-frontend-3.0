/** @format */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RegisterFormState } from '../../../redux/store/types';
import { RouteComponentProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteComponentProps<any> {
  component: React.FC;
  firebase: any;
  renderRoute: () => Element;
}

/**
 * Take a component and make a route around the component if the user is authorized
 * else redirect to login page
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, firebase, ...rest }) => {
  const [authorized, setAuthorized] = useState(false);

  useLayoutEffect(() => {
    const userToken = loadTokenFromLocalstorage();
    const isLoggedIn = checkIfUserIsLoggedIn(userToken);
    setAuthorized(isLoggedIn);
  });

  /**
   * Check if in the localStorage there is an element as "loggedIn"
   * @returns {object | undefined} - returns an object with the "loggedIn" item or "undefined" if not present
   */
  const loadTokenFromLocalstorage = () => {
    try {
      const serializedToken = localStorage.getItem('loggedIn');
      if (serializedToken === null) {
        return undefined;
      }
      return JSON.parse(serializedToken);
    } catch {
      return undefined;
    }
  };

  /**
   * Given an object check if it contains exists.
   * @param {object} loggedInObject - Firebase redux state
   * @returns {bool}
   */
  const checkIfUserIsLoggedIn = (loggedInObject: any) => (loggedInObject !== undefined ? true : false);

  //Get user token and check if user is logged in
  const userToken = loadTokenFromLocalstorage();
  const isLoggedIn = checkIfUserIsLoggedIn(userToken);

  return (
    <React.Fragment>
      {isLoggedIn ? <Route {...rest} render={(props: any) => <Component {...props} />} /> : <Redirect to="/" />}
    </React.Fragment>
  );
};

const mapStateToProps = (state: RegisterFormState) => ({ firebase: state.firebase.auth });

export default connect(mapStateToProps)(PrivateRoute);
