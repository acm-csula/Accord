import React from 'react'
import MessageBox from '../MessageBox/MessageBox'
import io from "socket.io-client";

import './ChatView.css'
	
const ChatView = (props) => {
	const messages = props.state.messages.map(message => <MessageBox message={message}/>)
	//Maybe put this in a constructor
	const user = props.state.user;
	const room_id = props.state.messages.room_id;
	const socket = io('localhost:8080');

	// Defining some actions
	// constructor(props){
	// 	super(props);
	// }

	socket.on('RECEIVE_MESSAGE', function(data){
		console.log(data)
       addMessage(data);
    });

    const addMessage = (data) => {
        props.actions.addMessage(data)
        //setState({messages: [...this.state.messages, data]});
    };

    const enterMessage = () => {
        handleMessage()
    }

    const handleMessage = () => {
    	const date = new Date();
    	const message = document.getElementById("message-box").value;
    	// props.actions.setMessage(message);
     //    // emit message object
     //    console.log(props.state.message);
        socket.emit('SEND_MESSAGE', message
        // {
        // 	// Random filler id until I figure this out lol
        // 	id: 5,
        //     user: user.email,
        //     room_id: room_id,
        //     content: props.state.message,
        //     time: date
        // }
        )
		document.getElementById("message-box").value = '';
        // props.actions.setMessage('')
    }
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
					<input id="message-box" className="message-field" placeholder="Message #general" type="text"/>
					<button onClick={enterMessage}>test</button>
				</div>
			</div>
		</div>
    )
}

export default ChatView
