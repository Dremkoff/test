import React from 'react';

// Style
import './index.css';

const Login = () => (
  <form action="">
    <div className="form-group">
      <label htmlFor="email">Username: </label>
      <input type="email" name="email" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
    </div>
    <input type="button" value="Sign In" />
  </form>
);

export default Login;
