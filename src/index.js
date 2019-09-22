
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/dashboard.scss";
import AuthenticationPage from './views/AuthenticationPage';



ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/auth/register" render={props => <AuthenticationPage {...props} />} />
      <Route path="/" render={props => <AuthenticationPage {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
