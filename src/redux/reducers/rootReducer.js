import authReducer from './authReducer';
import categoriesReducer from './categoryReducer';
import toastReducer from './toastReducer';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  toast: toastReducer,
  firebase: firebaseReducer
})

export default rootReducer;