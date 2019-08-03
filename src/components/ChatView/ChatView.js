import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatView.css'

class ChatView extends React.Component {
	constructor(props) {
		super(props)

		const date = new Date()
		const month = date.getMonth() + 1

		this.createdOn = month + '/' + date.getDate() + '/' + date.getFullYear()

		this.state = {
			id: '',
			message: '',
			user: this.props.state.user.displayName,
			created: this.createdOn
		}

		this.updateMessage = this.updateMessage.bind(this)
		this.sendMessage = this.sendMessage.bind(this)
	}

	componentDidMount() {
		const element = document.getElementById('scrollView');
   		element.scrollTop = element.scrollHeight
   	}

	updateMessage(e) {
		this.setState({message: e.target.value})
	}

	sendMessage(e) {
		if (e.keyCode == 13 && e.target.value.length > 0) {
			this.props.actions.addMessage(this.state,this.props.room.details.id)
			const element = document.getElementById('scrollView');
   			element.scrollTop = element.scrollHeight
		}
	}

	render() {
		const messages = []

		if (this.props.room.messages) {
			Object.keys(this.props.room.messages).forEach(key => {
				messages.push(<MessageBox key={this.props.room.messages[key].id} message={this.props.room.messages[key]}/>)
			})
		}
	                                             
		return (
			<div className="chat-container">
				<div className="chan-header">
					<h1> #</h1>
					<h3> general </h3>
					<p>{this.props.room.details.welcomeMessage}</p>
				</div>
				<div id='scrollView' className="message-container">
					{messages}
				</div>
				<div className="bottom-container">
					<div className="sender-container">
						<input className="message-field" placeholder="Message #general" type="text" content={this.state.message} onChange={this.updateMessage} onKeyDown={this.sendMessage}/>
					</div>
				</div>
			</div>
	    )
	}
}

export default ChatView