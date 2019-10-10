/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { getCategories } from '../redux/actions/categoriesActions';

import { Category } from '../types';

import DashboardLayout from '../layouts/DashboardLayout';
import CategoriesTable from '../components/categories/CategoriesTable';

interface CategoriesPageProps {
  auth: any;
  getCategories: any;
  categories: Category[];
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ auth, getCategories, categories }) => {
  useEffect(() => {
    if (auth.uid !== undefined && Object.keys(categories).length === 0) {
      getCategories(auth.uid);
    }
  });
  return (
    <DashboardLayout brandText="CATEGORIES" brandGradient="bg-gradient-blue">
      <CategoriesTable categories={categories} />
    </DashboardLayout>
  );
};
const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth,
  categories: state.categories.categories,
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, null, any>) => {
  return {
    getCategories: (id: string) => dispatch(getCategories(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
