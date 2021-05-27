import React from "react";
import Dashboard from './dashboard/dashboard'
import SignUp from "./signUp/signUp"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route path="/signUp" component={SignUp}/>
        <Route exact path="/" component={Dashboard}/>
      </Switch>
    </Router>
  );
}
