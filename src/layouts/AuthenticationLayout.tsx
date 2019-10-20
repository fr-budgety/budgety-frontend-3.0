/** @format */

import React from 'react';

import { Container } from 'reactstrap';
import LinearLoader from '../components/commons/linear-loader/LinearLoader';

interface AuthenticationLayoutProps {
  children?: any;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <LinearLoader />
      <div className="main-content">
        <div className="header py-6 py-lg-6">
          <Container>
            <div className="header-body">{children}</div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthenticationLayout;
