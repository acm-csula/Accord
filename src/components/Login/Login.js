import React from 'react';
import logo from './accordlogoname.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';

class login extends React.Component {
    login(){
        this.props.actions.login(this.state.email,this.state.password)
        this.setState({email: '',password: ''})
    }

    createAccount(){
        this.props.actions.createAccount(this.state.email,this.state.password)
        this.setState({email: '', password: ''})
    }

    emailChange = (e) => {
        this.setState({email: e.target.value})
    }

    passwordChange = (e) => {
        this.setState({password: e.target.value})
    }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        
        this.login = this.login.bind(this)
        this.createAccount = this.createAccount.bind(this)
    }

    render(){
        return(
            <div className="login-container" style={{textAlign: 'center'}}>
                <img className="login-logo" src={logo}/>
                <div className="post-container">
                    <input className="input-field" placeholder="Email" type="text" value={this.state.email} onChange={this.emailChange}/>
                    <input className="input-field" placeholder="Password" type="password" value={this.state.password} onChange={this.passwordChange}/>
                    <br/>
                    <button className="login-btn" onClick={this.login}> Login </button>
                    <br/>
                    <button className="create-btn" onClick={this.createAccount}> Don't have an account?  </button>
                </div>
            </div>
        )
    }
}

export default login;