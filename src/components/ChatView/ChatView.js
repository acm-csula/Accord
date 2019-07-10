import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatView.css'

class ChatView extends React.Component {
	mess1 = {
		id: '123',
		user: 'treblegni',
		content: 'dank memessssaksdmakmdad dsncdsknscskndsfds fs fsfsa fdsf saf afsa fadfjsa fajsf sjf sjv svsjv avljnalknca cads dlksfdsfs fsalfsad fsaflf saflsf dsafskf daf dsf dsf dsakf dsf asfasdjfnsfnsdsfdsf sdfdsfbcdv daskfsd fc',
		time: '07/1/2019'
	}

	mess2 = {
		id: '1234',
		user: 'deric',
		content: 'dank sknalkn',
		time: '07/1/2019'
	}

	render() {
		return (
			<div className="chat-container">
				<div className="chan-header">
					<h1> #</h1>
					<h3> general </h3>
					<p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
				</div>
				<div className="message-container">
					{/*We should use a loop to display messages. Should we make an api call here or when logging in?*/}
					<MessageBox message={this.mess1}/>
					<MessageBox message={this.mess2}/>
					<MessageBox message={this.props.state.messages[0]}/>
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