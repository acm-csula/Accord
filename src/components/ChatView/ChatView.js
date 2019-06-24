import React from 'react'

import './ChatView.css'

//Images
import pfp from './blank_pfp.png';

const ChatView = () => {
	return (
		<div className="col-md-8 middle-container">
			<div className="chan-header d-flex">
				<h1> #</h1>
				<h3> general </h3> 
				<p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
			</div>
			<div className="message-container">
				<div className="user-input">
					<div className="profile-pic-container">
						<img src={ pfp } className="user-profile-pic"/>
					</div>
					<div className="inner-userInput-content">
						<a className="username-message"> deric </a>
						<a className="mess-timestamp"> Today at 4:20am </a>
						<p> dank memessssaksdmakmdad dsncdsknscskndsfds fs fsfsa fdsf saf afsa fadfjsa fajsf sjf sjv svsjv avljnalknca cads dlksfdsfs fsalfsad fsaflf saflsf dsafskf daf dsf dsf dsakf dsf asfasdjfnsfnsdsfdsf sdfdsfbcdv daskfsd fc</p>
					</div>
				</div>
				<div className="user-input">
					<div className="profile-pic-container">
						<img src={ pfp } className="user-profile-pic"/>
					</div>
					<div className="inner-userInput-content">
						<a className="username-message"> deric </a>
						<a className="mess-timestamp"> Today at 4:20am </a>
						<p> dank sknalkn</p>
					</div>
				</div>
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