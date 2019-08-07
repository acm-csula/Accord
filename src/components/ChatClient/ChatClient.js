import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatClient.css'

class ChatClient extends React.Component {
	state = {
		id: '',
		message: '',
		user: '',
		created: ''
	}

	updateMessage = (e) => {
		this.setState({message: e.target.value})
	}

	sendMessage = (e) => {
		if (e.keyCode == 13 && e.target.value.length > 0) {
			this.props.actions.sendMessage(this.state,this.props.room.details.id)
			this.setState({message: ''})
		}
	}

	autoScroll = () => {
		const element = document.getElementById('scrollView');
   		element.scrollTop = element.scrollHeight
	}

	componentDidMount() {
		const element = document.getElementById('scrollView');
   		element.scrollTop = element.scrollHeight
   	}

   	componentDidUpdate() {
  		const element = document.getElementById('scrollView');
   		element.scrollTop = element.scrollHeight
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
						<input className="message-field" placeholder="Message #general" type="text" value={this.state.message} onChange={this.updateMessage} onKeyDown={this.sendMessage}/>
					</div>
				</div>
			</div>
	    )
	}
}

export default ChatClient