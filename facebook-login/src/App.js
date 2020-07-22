import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import LoginFacebook from './components/LoginFacebook/LoginFacebook';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";




// funzione il cui scopo e vedere se nel cookie ci sono informazioni dell'utente oppure no
const isUserLogged = () => {
  const cookies = new Cookies();
  const userData = JSON.stringify(cookies.get('userData'));
  let route = <LoginFacebook />;
  userData === undefined ? route = <Redirect to='/login' /> : route = <Redirect to='/home' />;
  return route;
}

class App extends React.Component {

  render() {
    return (
      <Router>
        {isUserLogged()}
        <Switch>
          <Route path="/login">
            <LoginFacebook />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
