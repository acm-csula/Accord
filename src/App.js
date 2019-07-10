import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/Login/Login.js';
import PostView from './components/PostView/PostView.js'

//hardcoded for testing
const messageArray = [{id: 1,user: 'treblegni',roomID: '1',content:'hi there',time: '7/10/2019'}]

class App extends Component {
    loadMessages = () => {
        const messages = fire.database().ref('messages');

        messages.on('value', function(snapshot) {
            console.log(snapshot.val())
        }); 
    }

    clearMessages = () => {
    }

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            status: '',
            messages: messageArray
        }

        this.actions = {
            login: (email,password) => {
                fire.auth().signInWithEmailAndPassword(email, password)
                    .then((u) => {
                        console.log('Successfully Logged In');
                    })
                    .catch((err) => {
                        console.log('Error: ' + err.toString());
                    })
            },
            createAccount: (email,password) => {
                fire.auth().createUserWithEmailAndPassword(email, password)
                    .then((u) => {
                        console.log('Account Created');
                    })
                    .catch((err) => {
                        console.log('Error: ' + err.toString());
                    })
            },
            logout: () => {
                fire.auth().signOut()
            },
            setStatus: (status) => {
                this.setState(status)
            },
            addMessage: (message) => {
                this.setState(message)
            }
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    render() {
        return (
            <div className="App">
                { this.state.user ? ( <PostView state={this.state} actions={this.actions}/> ) : ( <Login actions={this.actions}/> ) }
            </div>
        );
    }
}

export default App;