/** @format */

import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import DashboardNavbar from '../components/navbar/DashboardNavbar';

import routes from '../utils/routes/routes';

interface DashboardLayoutProps {
  children?: any;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar
        logo={{
          innerLink: '/user/dashboard',
          imgSrc: require('assets/img/brand/budgety.svg'),
          imgAlt: 'budgety',
        }}
        routes={routes}
      />
      <div className="main-content">
        <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
          <DashboardNavbar brandText="brand text" />
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;