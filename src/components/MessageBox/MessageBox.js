import React from 'react'

import './MessageBox.css'

//Images
import pfp from './blank_pfp.png';

const MessageBox = (props) => {
	return (
		<div className="user-input">
			<div className="profile-pic-container">
				<img src={pfp} className="user-profile-pic"/>
			</div>
			<div className="inner-userInput-content">
				<a className="username-message">{props.message.user}</a>
				<a className="mess-timestamp"> {props.message.time}</a>
				<p>{props.message.message}</p>
			</div>
		</div>
	)
}

export default MessageBox