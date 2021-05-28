import React from "react";
import Dashboard from './dashboard/dashboard';
import SignUp from "./signUp/signUp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavDash from './init_dashboard/navDash';


export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={NavDash}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/home" component={Dashboard}/>
      </Switch>
    </Router>
  );
}
