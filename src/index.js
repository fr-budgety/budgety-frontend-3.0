
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AuthenticationPage from './views/AuthenticationPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth/register" render={props => <AuthenticationPage {...props} />} />
      <Route path="/" render={props => <AuthenticationPage {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
