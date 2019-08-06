import React from "react"
import RoomMenu from '../RoomMenu/RoomMenu'
import ChatClient from '../ChatClient/ChatClient'

import './RoomView.css'

const RoomView = (props) => {
    return (
        <div className="room-view-container">
            <RoomMenu room={props.room} state={props.state} actions={props.actions}/>
            <ChatClient room={props.room} state={props.state} actions={props.actions}/>
        </div>
    )
}

export default RoomView