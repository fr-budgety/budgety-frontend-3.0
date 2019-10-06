import authReducer from './authReducer';
import categoriesReducer from './categoryReducer';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  firebase: firebaseReducer
})

export default rootReducer;