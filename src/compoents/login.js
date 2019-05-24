import React from 'react';
import logo from '../images/accordlogoname.png';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const login =  () => {
    return(
        <div className="login-container">
        <img className="login-logo" alt="Accord Text Logo" src={logo}></img>
        <div className="login-btn-container">
          <a className="login-txt" href="#"> Login </a>
          <br></br>
          <small className="text-muted small-text"> with Google.</small>
        </div>
      </div>
    );
};

export default login;