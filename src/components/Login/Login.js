import React from 'react';
import logo from './accordlogoname.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';

class login extends React.Component {
    state = {
        emailInput: '',
        passwordInput: ''
    }

    login = () => {
        this.props.actions.login(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '',passwordInput: ''})
    }

    handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            this.login()
        }
    }

    updateEmailInput = (e) =>  {
        this.setState({emailInput: e.target.value})
    }

    updatePasswordInput = (e) => {
        this.setState({passwordInput: e.target.value})
    }

    createAccount = () => {
        this.props.actions.createAccount(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '', passwordInput: ''})
    }

    render(){
        return(
            <div className="login-container" style={{textAlign: 'center'}}>
                <img className="login-logo" src={logo}/>
                <div className="post-container">
                    <input className="input-field" placeholder="Email" type="text" value={this.state.emailInput} onChange={this.updateEmailInput} onKeyDown={this.handleKeyDown}/>
                    <input className="input-field" placeholder="Password" type="password" value={this.state.passwordInput} onChange={this.updatePasswordInput} onKeyDown={this.handleKeyDown}/>
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