import React, { useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Home from '../home/home';
import TutorItem from '../tutor/tutorItem';
import Halp from '../halp/halp'

export default function Dashboard() {
  const { user } = useParams();
  const { path } = useRouteMatch();

  return (
    <div id="main-container">
      <div>
        <NavBar />
        <Switch>
          <Route path={`${path}/help`}>
            <Home/>
          </Route>
          <Route exact path={path} children={<TutorItem/>}/>
        </Switch>
      </div>
    </div>
  );
}
