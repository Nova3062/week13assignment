import React from 'react';
import Button from 'react-bootstrap/Button';


const LoginForm = () => {
  return (
    <form className="login-form">
      <h3 className="login-title">Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Button  className="btn btn-success"variant="danger">Log In</Button>
    </form>
   

  );
};

export default LoginForm;
