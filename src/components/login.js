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
            <img className="login-logo" src={logo}/>
            <div className="post-container">
            <input id="email" className="input-field" placeholder="Email" type="text"/>
            <input id="password" className="input-field" placeholder="Password" type="password"/>
            <br/>
            <button className="login-btn" onClick={this.login}> Login </button>
            <br/>
            <button className="create-btn" onClick={this.createAccount}> Don't have an account?  </button>
            </div>
          </div>
         );
    }
}

export default login;