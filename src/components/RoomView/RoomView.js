import React from "react"
import {Route} from 'react-router-dom'
import RoomMenu from '../RoomMenu/RoomMenu'
import ChatView from '../ChatView/ChatView'

import './RoomView.css'

class RoomView extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="room-view-container">
                <RoomMenu room={this.props.room} state={this.props.state} actions={this.props.actions}/>
                <ChatView state={this.props.state}/>
            </div>
        )
    }
}

export default RoomView