/** @format */

import React, { SFC } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import CategoriesTable from '../components/categories/CategoriesTable';

const CategoriesPage: SFC = () => {
  return (
    <DashboardLayout brandText="CATEGORIES">
      <CategoriesTable />
    </DashboardLayout>
  );
};

export default CategoriesPage;
