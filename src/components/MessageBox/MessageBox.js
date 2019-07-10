import React from 'react'

import './MessageBox.css'

//Images
import pfp from './blank_pfp.png';

class MessageBox extends React.Component {
	render() {
		return (
			<div className="user-input">
				<div className="profile-pic-container">
					<img src={pfp} className="user-profile-pic"/>
				</div>
				<div className="inner-userInput-content">
					{console.log(this.props)}
					<a className="username-message">{this.props.message.user}</a>
					<a className="mess-timestamp"> {this.props.message.time}</a>
					<p>{this.props.message.content}</p>
				</div>
			</div>
		)
	}
}

export default MessageBox