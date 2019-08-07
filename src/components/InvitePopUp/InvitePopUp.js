import React from 'react'

import './InvitePopUp.css'

class InvitePopUp extends React.Component {
	state = {
		inviteCode: '',
	}

	handleOnChange = (e) => {
		e.preventDefault()
		
		this.setState({inviteCode: e.target.value})
	}

	sendInvite = () => {
	}

	render() {
		return (
			<div className='invite-container'>
				<div className='invite-input-container'>
					<input className='invite-input-field' type='text' placeholder='Enter friend code' value={this.state.inviteCode} onChange={this.handleOnChange}/>
					<button className='invite-button' onClick={this.sendInvite}>Send Invite</button>
		    	</div>
            </div>
		)
	}
}

export default InvitePopUp