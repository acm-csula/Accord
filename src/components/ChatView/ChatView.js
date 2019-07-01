import React from 'react'
import MessageBox from '../MessageBox/MessageBox'

import './ChatView.css'

//Images
import pfp from './blank_pfp.png';

const ChatView = () => {
	const mess1 = {
		id: '123',
		user: 'treblegni',
		picURL: pfp,
		content: 'dank memessssaksdmakmdad dsncdsknscskndsfds fs fsfsa fdsf saf afsa fadfjsa fajsf sjf sjv svsjv avljnalknca cads dlksfdsfs fsalfsad fsaflf saflsf dsafskf daf dsf dsf dsakf dsf asfasdjfnsfnsdsfdsf sdfdsfbcdv daskfsd fc',
		time: '07/1/2019'
	}

	const mess2 = {
		id: '1234',
		user: 'deric',
		picURL: pfp,
		content: 'dank sknalkn',
		time: '07/1/2019'
	}

	return (
		<div className="chat-container">
			<div className="chan-header">
				<h1> #</h1>
				<h3> general </h3>
				<p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
			</div>
			<div className="message-container">
				{/*We should use a loop to display messages. Should we make an api call here or when logging in?*/}
				<MessageBox message={mess1}/>
				<MessageBox message={mess2}/>
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