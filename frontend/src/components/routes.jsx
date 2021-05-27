import React from "react";
import Dashboard from './dashboard/dashboard'
import SignUp from "./signUp/signUp"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/signUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}
