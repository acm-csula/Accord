import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/Login/Login.js';
import PostView from './components/PostView/PostView.js'

//hardcoded for testing
const messageArray = 
    [
        {
            id: '123',
            user: 'treblegni',room_id: '1',
            content: 'dank memessssaksdmakmdad dsncdsknscskndsfds fs fsfsa fdsf saf afsa fadfjsa fajsf sjf sjv svsjv avljnalknca cads dlksfdsfs fsalfsad fsaflf saflsf dsafskf daf dsf dsf dsakf dsf asfasdjfnsfnsdsfdsf sdfdsfbcdv daskfsd fc',
            time: '07/1/2019'
        },
        {
            id: '1234',
            user: 'deric',
            room_id: '1',
            content: 'dank sknalkn',
            time: '07/1/2019'
        },
        {
            id: 1,
            user: 'treblegni',
            room_id: '1',
            content:'hi there',
            time: '7/10/2019'
        }
    ]

const roomArray = [{id: 1,name: "acm",icon_url: "",owner_id: 1},{id: 2,name: "test",icon_url: "",owner_id: 1}]

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
            status: {
                green: {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: '#2ecc71'
                },
                red: {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: 'red'
                },
                yellow: {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: 'yellow'
                }
            },
            rooms: roomArray,
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