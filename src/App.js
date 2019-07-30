import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/Login/Login.js';
import PostView from './components/PostView/PostView.js'

const db = fire.database()

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            status: {
                display: 'inline-block',
                height: '14px',
                width: '14px',
                borderRadius: '50%',
                marginRight: '0.5rem',
                backgroundColor: '#2ecc71'
            },
            rooms: {},
            subscriptions: [],
            messages: []
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
                        const usersRef = db.ref('users')

                        usersRef.update({
                            [u.user.uid]: {
                                id: u.user.uid,
                                displayName: u.user.email,
                                email: u.user.email,
                                name: 'n/a'
                            }
                        })

                        u.user.updateProfile({
                            displayName: u.user.email
                        })
                    })
                    .catch((err) => {
                        console.log('Error: ' + err.toString());
                    })
            },
            logout: () => {
                fire.auth().signOut()
            },
            joinRoom: () => {

            },
            createRoom: (roomDetails) => {
                const roomsRef = db.ref('rooms')
                const newId = roomsRef.push().key
                roomDetails.id = newId

                roomsRef.update({
                    [newId]: {
                        details: roomDetails
                    }
                })
            },
            joinRoom: (state) => {
                console.log('joined')
            },
            setStatus: (status) => {
                this.setState({status: status})
            },
            addMessage: (message) => {
                this.setState({message: message})
            },
            loadMessages: (roomID) => {
                this.loadMessages(roomID)
            }
        }
        this.authListener = this.authListener.bind(this)
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                this.loadRooms()
                
            } else {
                this.setState({ user: null })
            }
        })
    }

    loadRooms() {
        const roomsRef = fire.database().ref('rooms').orderByChild('details/ownerId').equalTo(this.state.user.uid)

        roomsRef.on("value", (snapshot) => {
                this.setState({rooms: snapshot.val()})
            },
            function (errorObject) {
                console.log("The read failed: " + errorObject.code)
            }
        )
    }

    loadSubscriptions() {
        const subsRef = fire.database().ref('subscriptions').orderByChild('subscriberId').equalTo(this.state.user.uid)

        subsRef.on("value", (snapshot) => {
                this.setState({subscriptions: snapshot.val()})
            }, 
            function (errorObject) {
                console.log("The read failed: " + errorObject.code)
            }
        )
    }

    render() {
        return (
            <div>
                { this.state.user ? ( <PostView state={this.state} actions={this.actions}/> ) : ( <Login actions={this.actions}/> ) }
            </div>
        );
    }
}

export default App;