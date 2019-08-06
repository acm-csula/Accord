import React from 'react'

import './CreateForm.css'

class CreateForm extends React.Component {
	state = {
		id: '',
		name: '',
		welcomeMessage: '',
		ownerId: '',
		created: ''
	}

	updateName = (e) => {
		this.setState({name: e.target.value})
	}

	updateMessage = (e) => {
		this.setState({welcomeMessage: e.target.value})
	}

	createRoom = (e) => {
		e.preventDefault()

		if (this.state.name.length > 0 && this.state.welcomeMessage.length > 0) {
			this.props.actions.plusPressed()
			this.props.actions.create(this.state)
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