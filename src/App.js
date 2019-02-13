import React from 'react';
import { Route, Switch } from 'react-router';

// Components
import Header from './components/header';
import Login from './components/login';
import Profile from './components/profile';

// Style
import './App.css';

const App = () => (
  <div className="main-app">
    <Header />
    <Switch>
      <Route exact path="/:lang(en|ro|ru)/profile" component={Profile} />
      <Route exact path="/:lang(en|ro|ru)/login" component={Login} />
      <Route render={() => <h1>404</h1>} />
    </Switch>
  </div>
);

export default App;
