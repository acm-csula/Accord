import React from 'react'

import './MessageBox.css'

class MessageBox extends React.Component {
	render() {
		return (
			<div className="user-input">
				<div className="profile-pic-container">
					<img src={this.props.message.picURL} className="user-profile-pic"/>
				</div>
				<div className="inner-userInput-content">
					<a className="username-message">{this.props.message.user}</a>
					<a className="mess-timestamp"> {this.props.message.time}</a>
					<p>{this.props.message.content}</p>
				</div>
			</div>
		)
	}
}

export default MessageBox