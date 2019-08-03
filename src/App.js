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
            joinVisible: false,
            ownedRooms: {},
            subbedRooms: {}
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
            joinRoom: (inviteCode) => {
                let conflict = false

                if (this.state.ownedRooms) {
                    if (this.state.ownedRooms.hasOwnProperty(inviteCode.substring(15,inviteCode.length))) {
                        conflict = true
                    }
                }
                if (this.state.subbedRooms) {
                    if (this.state.subbedRooms.hasOwnProperty(inviteCode.substring(15,inviteCode.length))) {
                        conflict = true
                    }
                }
                if (!conflict) {
                    console.log('passed')
                    console.log(inviteCode.substring(15,inviteCode.length))
                    const membersRef = db.ref(`rooms/${inviteCode.substring(15,inviteCode.length)}/members`)
                    const date = new Date()
                    const month = date.getMonth() + 1

                    const createdOn = month + '/' + date.getDate() + '/' + date.getFullYear()

                    membersRef.update({
                        [this.state.user.uid]: {
                            memberId: this.state.user.uid,
                            displayName: this.state.user.displayName,
                            email: this.state.user.email,
                            joined: createdOn
                        }
                    })
                }
            },
            addMessage: (state,roomId) => {
                const messagesRef = db.ref(`rooms/${roomId}/messages`)
                const newId = messagesRef.push().key
                state.id = newId

                messagesRef.update({
                    [newId]: state
                })
            },
            deleteMessage: () => {

            },
            plusPressed: () => {
                this.setState({joinVisible: !this.state.joinVisible})
            },
            setStatus: (status) => {
                this.setState({status: status})
            }
        }
        this.authListener = this.authListener.bind(this)
    }

    componentDidMount() {
        this.authListener() 
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                this.loadOwnedRooms()
                this.loadSubbedRooms()
                
            } else {
                this.setState({ user: null })
            }
        })


    }

    loadOwnedRooms() {
        const roomsRef = db.ref('rooms').orderByChild('details/ownerId').equalTo(this.state.user.uid)

        roomsRef.on("value", (snapshot) => {
                this.setState(({ownedRooms: snapshot.val()}))
            },
            function (errorObject) {
                console.log("The read failed: " + errorObject.code)
            }
        )
    }

    loadSubbedRooms() {
        const subRoomsRef = db.ref('rooms').orderByChild(`members/${this.state.user.uid}/memberId`).equalTo(this.state.user.uid)

        subRoomsRef.on("value", (snapshot) => {
                console.log('queued')
                this.setState(({subbedRooms: snapshot.val()}))
            },
            function (errorObject) {
                console.log("The read failed: " + errorObject.code)
            }
        )
    }

    loadSubscriptions() {
        const subsRef = db.ref('subscriptions').orderByChild('subscriberId').equalTo(this.state.user.uid)

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