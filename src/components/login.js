import React from 'react';
import logo from '../images/accordlogoname.png';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.css';
import fire from '../config/fire';

class login extends React.Component {

    login(){
    const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            fire.auth().signInWithEmailAndPassword(email, password)
              .then((u) => {
                alert.show('Successfully Logged In');
              })
              .catch((err) => {
                console.log('Error: ' + err.toString());
              })
    }

    createAccount(){
    const email = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                fire.auth().createUserWithEmailAndPassword(email, password)
                  .then((u) => {
                    console.log('Successfully Signed Up');
                  })
                  .catch((err) => {
                    console.log('Error: ' + err.toString());
                  })
    }

    render(){
        return(
              <div className="login-container" style={{textAlign: 'center'}}>
                <input id="email" placeholder="Email ID" type="text"/>
                <br/>
                <br/>
                <input id="password" placeholder="Password" type="password"/>
                <br/>
                <br/>
                    <a className="login-txt" onClick={this.login}> Login </a>
                    <br/>
                    <a className="login-txt" onClick={this.createAccount}> Create Account</a>
              </div>
         );
    }
}

export default login;