import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button id="myButton">Login</button>
    </div>
  );
};

export default LoginForm;
