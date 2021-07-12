import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './css/style.scss';
import Home from './pages/Home';


function App() {



 

  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
