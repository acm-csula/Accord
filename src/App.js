import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/login.js';
import PostView from './components/PostView/PostView.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

    this.actions = {
        logout: () => {
            fire.auth().signOut()
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
        { this.state.user ? ( <PostView actions={this.actions}/> ) : ( <Login /> ) }
      </div>
    );
  }
}

export default App;