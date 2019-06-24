import React from "react"
import {Route} from 'react-router-dom'
import Menu from '../Menu/Menu'
import ChatView from '../ChatView/ChatView'

import './RoomView.css'

class RoomView extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="room-view-container">
                <Menu/>
                <Route path='/acm/general' component={ChatView}/>
            </div>
        )
    }
}

export default RoomView