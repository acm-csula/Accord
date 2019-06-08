import React from 'react'
import NavBar from './components/NavBar'
import MainView from './components/MainView'

import './App.css'

class App extends React.Component {
    state = {
            currentUser: '',
            currentRoom: '',
            currentView: 'chat'
    }

    render() {
        return (
            <div className="App">
                <div>
                    <NavBar/>
                </div>
                <div>
                    <MainView/>
                </div>
            </div>
        )
    }
}

export default App
