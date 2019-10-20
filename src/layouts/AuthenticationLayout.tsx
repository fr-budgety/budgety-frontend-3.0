/** @format */

import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import LinearLoader from '../components/commons/linear-loader/LinearLoader';
import { AuthenticationLayoutState } from '../redux/store/types';

interface AuthenticationLayoutProps {
  children?: any;
  isLoading: boolean;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ children, isLoading }) => {
  return (
    <React.Fragment>
      {isLoading && <LinearLoader />}
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

const mapStateToProps = (state: AuthenticationLayoutState) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(AuthenticationLayout);
