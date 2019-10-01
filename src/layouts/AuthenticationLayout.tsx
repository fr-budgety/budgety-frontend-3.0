/** @format */

import React from 'react';

import { Container } from 'reactstrap';

interface AuthenticationLayoutProps {
  children?: any;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ children }) => {
  return (
    <div className="main-content">
      <div className="header py-6 py-lg-6">
        <Container>
          <div className="header-body">{children}</div>
        </Container>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
