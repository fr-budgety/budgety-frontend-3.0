
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { ToastContainer } from 'react-toastify';

import fbConfig from './config/base';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/dashboard.scss";
import 'react-toastify/dist/ReactToastify.css';

import SignUpPage from './views/SignupPage';
import rootReducer from './redux/reducers/rootReducer';
import SignInPage from './views/SignInPage';
import MainPage from './views/MainPage';
import PrivateRoute from './components/authentication/private-route/PrivateRoute'
import CategoriesPage from './views/CategoriesPage';

// Create redux store
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reactReduxFirebase(fbConfig, { attachAuthIsReady: true }),
  reduxFirestore(fbConfig),
));

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer enableMultiContainer />
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path='/user/dashboard' component={MainPage} />
            <PrivateRoute exact path='/user/categories' component={CategoriesPage} />
            <Route exact path="/auth/login" component={SignInPage} />
            <Route exact path="/auth/register" component={SignUpPage} />
            <Route exact path="/" render={props => <SignInPage {...props} />} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  )
}

export default App;