import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import LogIn from '../logIn/LogIn';
import NavBar from './navbar';
import SignUp from '../signUp/signUp';


export default function NavDash() {
  const { user } = useParams();
  const { path } = useRouteMatch();

  return (
    <div id="main-container">
      <div>
        <NavBar />
        <Switch>
          <Route path={'/signUp'}>
            <SignUp/>
          </Route>
          <Route exact path={path} children={<LogIn/>}/>
        </Switch>
      </div>
    </div>
  );
}
