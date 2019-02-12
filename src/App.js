import React from 'react';

// Components
import Header from './components/header';
import Login from './components/login';
import Profile from './components/profile';

// Style
import './App.css';

const App = () => (
  <div className="main-app">
    <Header />
    <Login />
    <Profile />
  </div>
);

export default App;
