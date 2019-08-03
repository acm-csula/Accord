import React from 'react';
import logo from './accordlogoname.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';

class login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailInput: '',
            passwordInput: ''
        }
        
        this.login = this.login.bind(this)
        this.createAccount = this.createAccount.bind(this)
        this.updateEmailInput = this.updateEmailInput.bind(this)
        this.updatePasswordInput = this.updatePasswordInput.bind(this)
    }

    login(){
        this.props.actions.login(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '',passwordInput: ''})
    }

    createAccount(){
        this.props.actions.createAccount(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '', passwordInput: ''})
    }

    updateEmailInput(e) {
        this.setState({emailInput: e.target.value})
    }

    updatePasswordInput(e) {
        this.setState({passwordInput: e.target.value})
    }

    render(){
        return(
            <div className="login-container" style={{textAlign: 'center'}}>
                <img className="login-logo" src={logo}/>
                <div className="post-container">
                    <input className="input-field" placeholder="Email" type="text" value={this.state.emailInput} onChange={this.updateEmailInput}/>
                    <input className="input-field" placeholder="Password" type="password" value={this.state.passwordInput} onChange={this.updatePasswordInput}/>
                    <br/>
                    <button className="login-btn" onClick={this.login}> Login </button>
                    <br/>
                    <button className="create-btn" onClick={this.createAccount}> Create Account  </button>
                </div>
            </div>
        )
    }
}

export default login;