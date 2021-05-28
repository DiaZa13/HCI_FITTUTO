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
import Tutor from '../tutor/tutor';
import Asignaturas from '../asignaturas/asignaturas';
import Exercises from '../Exercises/Exercises';

export default function Dashboard() {
  const { user } = useParams();
  const { path } = useRouteMatch();

  return (
    <div id="main-container">
      <div>
        <NavBar />
        <Switch>
          <Route path={`${path}/help`}>
            <Halp/>
          </Route>
          <Route path={`${path}/assignments`}>
            <Asignaturas/>
          </Route>
          <Route path={`${path}/tutor`}>
            <Tutor/>
          </Route>
          <Route path={`${path}/exercises`}>
            <Exercises/>
          </Route>
          <Route exact path={path} children={<Home/>}/>
        </Switch>
      </div>
    </div>
  );
}
