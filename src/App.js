import React from 'react'
import RoomView from './components/RoomView'
import Submenu from './components/Submenu'
import ChatView from './components/ChatView'

import './App.css'

function App(props) {
    return (
        <div className="App">
            <div>
                <RoomView></RoomView>
            </div>
            <div>
                <Submenu></Submenu>
            </div>
            <div>
                <ChatView></ChatView>
            </div>
        </div>
    )
}

export default App
