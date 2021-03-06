/** @format */

import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

interface CenteredBlankLayoutProps {
  children?: any;
}

const CenteredBlankLayout: React.FC<CenteredBlankLayoutProps> = ({ children }) => {
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

CenteredBlankLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default CenteredBlankLayout;
