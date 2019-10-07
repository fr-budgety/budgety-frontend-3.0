/** @format */

import React, { SFC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { getCategories } from '../redux/actions/categoriesActions';

import DashboardLayout from '../layouts/DashboardLayout';
import CategoriesTable from '../components/categories/CategoriesTable';

interface CategoriesPageProps {
  auth: any;
  getCategories: any;
  categories: any;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ auth, getCategories, categories }) => {
  useEffect(() => {
    if (auth.uid !== undefined && Object.keys(categories).length === 0) {
      getCategories(auth.uid);
    }
  });
  return (
    <DashboardLayout brandText="CATEGORIES">
      {console.log(categories)}
      <CategoriesTable />
    </DashboardLayout>
  );
};
const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth,
  categories: state.categories.categories,
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, undefined, any>) => {
  return {
    getCategories: (id: string) => dispatch(getCategories(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
