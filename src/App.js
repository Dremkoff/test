import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Components
import Header from './components/header';
import Login from './components/login';
import Profile from './components/profile';
import ProtectedRoute from './components/common/protectedRoute';

// Style
import './App.css';

const App = () => (
  <div className="main-app">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/en" />} />
      <Route exact path="/:lang(en|ro|ru)" render={() => null} />
      <Route exact path="/:lang(en|ro|ru)/login" component={Login} />
      <ProtectedRoute exact path="/:lang(en|ro|ru)/profile" component={Profile} />
      <Route render={() => <h1>404</h1>} />
    </Switch>
  </div>
);

export default App;
