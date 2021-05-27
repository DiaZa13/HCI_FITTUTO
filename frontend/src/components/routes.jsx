import React from "react";
import Dashboard from './dashboard/dashboard';
import SignUp from "./signUp/signUp";
import LogIn from './logIn/LogIn';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/home" component={Dashboard}/>
      </Switch>
    </Router>
  );
}
