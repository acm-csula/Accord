import React from 'react';
import logo from './images/accordlogoname.png';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="login-container">
      <img className="login-logo" src={logo}></img>
      <div className="login-btn-container">
        <a className="login-txt"> Login </a> <br></br>
        <a className="text-muted small-text"> with Google.</a>
      </div>
    </div>
  );
}

export default App;
