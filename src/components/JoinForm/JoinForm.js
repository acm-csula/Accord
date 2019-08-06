import React from 'react'

import './JoinForm.css'

class JoinForm extends React.Component {
	state = {
		inviteCode: ''
	}

	handleInput = (e) => {
		this.setState({inviteCode: e.target.value})
	}

	joinRoom = (e) => {
		e.preventDefault()
		
		if (this.state.inviteCode.length > 0) {
			this.props.actions.plusPressed()
			this.props.actions.join(this.state.inviteCode)
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