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
                console.log('Successfully Logged In');
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
                <img src={logo} style={{width: 150, height: 150, align: 'center'}}/>
                <br/>
                <input id="email" className="email-field" placeholder="Email ID" type="text" style={{align: 'center'}}/>
                <br/>
                <br/>
                <input id="password" className="email-field" placeholder="Password" type="password"/>
                <br/>
                <br/>
                    <button className="login-txt login-btn-container" onClick={this.login}> Login </button>
                    <br/>
                    <button className="login-txt login-btn-container" onClick={this.createAccount}> Create Account </button>
              </div>
         );
    }
}

export default login;