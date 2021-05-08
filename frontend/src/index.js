import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {BrowserRouter ,Router, Route, Switch, Redirect } from "react-router-dom";
//import CarpoolRoutes from Route;

// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";
import Carpoolroutes from "routes";
import Registro from "layouts/Registro.js";
import Carpool from "views/Dashboard/Dashboard.js"

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/admin" component={Admin} />
      
      <Redirect from="/admin" to="/admin/Carpool"/>
    </Switch>   
  </Router>,
  document.getElementById("root")
);
