import authReducer from './authReducer';
import categoriesReducer from './categoryReducer';
import isLoadingReducer from './loadingReducer';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  isLoading: isLoadingReducer,
  firebase: firebaseReducer
})

export default rootReducer;