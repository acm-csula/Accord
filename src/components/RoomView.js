import React from "react"
import RoomMenu from './RoomMenu.js'
import ChatView from './ChatView.js'

import './css/RoomView.css'

class RoomView extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        return (
            <div className="centerView">
            	<div>
            		<RoomMenu/>
            	</div>
            	<div>
            		<ChatView/>
            	</div>
            </div>
        )
    }
}

export default RoomView