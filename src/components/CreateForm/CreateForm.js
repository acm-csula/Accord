import React from 'react'

import './CreateForm.css'

class CreateForm extends React.Component {
	constructor(props) {
		super(props)

		const date = new Date()
		const month = date.getMonth() + 1

		this.createdOn = month + '/' + date.getDate() + '/' + date.getFullYear()

		this.state = {
			id: '',
			name: '',
			welcomeMessage: '',
			ownerId: this.props.state.user.uid,
			created: this.createdOn
		}

		this.updateName = this.updateName.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.createRoom = this.createRoom.bind(this)
	}

	updateName(e) {
		this.setState({name: e.target.value})
	}

	updateMessage(e) {
		this.setState({welcomeMessage: e.target.value})
	}

	createRoom(e) {
		e.preventDefault()

		if (this.state.name.length > 0 && this.state.welcomeMessage.length > 0) {
			this.props.actions.plusPressed()
			this.props.actions.createRoom(this.state)
		}
	}

	render() {
		return (
			<div className='create-form-container'>
				<form>
					<input className="create-form-input" placeholder="Room Name" type="text" value={this.state.name} onChange={this.updateName}/>
                    <input className="create-form-input" placeholder="Message" type="text" value={this.state.welcomeMessage} onChange={this.updateMessage}/>
                    <br/>
                    <button className="create-form-btn" onClick={this.createRoom}>Create</button>
				</form>
			</div>
		)
	}
}

export default CreateForm