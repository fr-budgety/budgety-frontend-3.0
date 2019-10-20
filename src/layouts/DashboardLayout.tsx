/** @format */

import React, { ReactNode } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import DashboardNavbar from '../components/navbar/DashboardNavbar';
import LinearLoader from '../components/commons/linear-loader/LinearLoader';

import routes from '../utils/routes/routes';

interface DashboardLayoutProps {
  children?: ReactNode;
  brandText?: string;
  brandGradient?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, brandText, brandGradient }) => {
  return (
    <>
      <LinearLoader />
      <Sidebar
        logo={{
          innerLink: '/user/dashboard',
          imgSrc: require('assets/img/brand/budgety.svg'),
          imgAlt: 'budgety',
        }}
        routes={routes}
      />
      <div className="main-content">
        <div className={`header ${brandGradient} pb-8 pt-5 pt-md-8`}>
          <DashboardNavbar brandText={brandText ? brandText : 'Loading'} />
        </div>
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
