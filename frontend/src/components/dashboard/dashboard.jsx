import React, {useState} from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavBar from '../navbar/navbar';
import Carousel from '../home/carousel';
import Home from '../home/home';

export default function Dashboard() {
  let { user } = useParams();
  let {path} = useRouteMatch();


  return(
    <div id={'main-container'}>
      <div>
        <NavBar/>
        <Switch>
          <Route  path={`${path}`}>
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>

  );

}




