import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import '../css/style.scss';
import Home from '../pages/Home';


function AppRouter() {



 

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;

