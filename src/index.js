
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/dashboard.scss";

import AuthenticationPage from './views/AuthenticationPage';
import rootReducer from './redux/reducers/rootReducer';

// Create redux store
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth/register" render={props => <AuthenticationPage {...props} />} />
        <Route path="/" render={props => <AuthenticationPage {...props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
