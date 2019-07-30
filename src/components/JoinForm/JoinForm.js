import React from 'react'

import './JoinForm.css'

class JoinForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			welcomeMesage: '',
			ownerId: '',
			created: ''
		}

		this.updateName = this.updateName.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.joinRoom = this.joinRoom.bind(this)
	}

	updateName(e) {
		this.setState({nameInput: e.target.value})
	}

	updateMessage(e) {
		this.setState({welcomeMesage: e.target.value})
	}

	joinRoom(e) {
		e.preventDefault()
		this.props.actions.joinRoom(this.state)
	}

	render() {
		return (
			<div className='join-form-container'>
				<form>
					<input className="join-form-input" placeholder="Invite URL" type="text" value={this.state.name} onChange={this.updateName}/>
                    <br/>
                    <button className="join-form-btn" onClick={this.joinRoom}>Join</button>
				</form>
			</div>
		)
	}
}

export default JoinForm