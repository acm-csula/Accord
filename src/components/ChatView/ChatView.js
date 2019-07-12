import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatView.css'

const ChatView = (props) => {
	const messages = props.state.messages.map(message => <MessageBox message={message}/>)

	return (
		<div className="chat-container">
			<div className="chan-header">
				<h1> #</h1>
				<h3> general </h3>
				<p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
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

export default ChatView