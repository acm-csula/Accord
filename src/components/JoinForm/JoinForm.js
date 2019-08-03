import React from 'react'

import './JoinForm.css'

class JoinForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inviteCode: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.joinRoom = this.joinRoom.bind(this)
	}

	handleInput(e) {
		this.setState({inviteCode: e.target.value})
	}

	joinRoom(e) {
		e.preventDefault()
		
		if (this.state.inviteCode.length > 0) {
			this.props.actions.plusPressed()
			this.props.actions.joinRoom(this.state.inviteCode)
		}	
	}

	render() {
		return (
			<div className='join-form-container'>
				<form>
					<input className="join-form-input" placeholder="Invite URL" type="text" value={this.state.inviteCode} onChange={this.handleInput}/>
                    <br/>
                    <button className="join-form-btn" onClick={this.joinRoom}>Join</button>
				</form>
			</div>
		)
	}
}

export default JoinForm