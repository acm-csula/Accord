import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatView.css'

class ChatView extends React.Component {
	constructor(props) {
		super(props)


	}

	render() {
		const messages = []

		if (this.props.room.messages) {
			Object.keys(this.props.room.messages).forEach(key => {
				messages.push(<MessageBox message={this.props.room.messages[key]}/>)
			})
		}
	                                             
		return (
			<div className="chat-container">
				<div className="chan-header">
					<h1> #</h1>
					<h3> general </h3>
					<p>{this.props.room.details.welcomeMessage}</p>
				</div>
				<div className="message-container">
					{messages}
				</div>
				<div className="bottom-container">
					<div className="sender-container">
						<input className="message-field" placeholder="Message #general" type="text"/>
					</div>
				</div>
			</div>
	    )
	}
}

export default ChatView