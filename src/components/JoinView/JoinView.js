import React from 'react'

import JoinRoom from '../JoinRoom/JoinRoom'
import CreateRoom from '../CreateRoom/CreateRoom'

import './JoinView.css'

class JoinView extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			joinPopVisible: false,
			createPopVisible: false
		}

		this.joinPressed = this.joinPressed.bind(this)
		this.createPressed = this.createPressed.bind(this)
	}

	joinPressed() {
		this.setState({joinPopVisible: !this.state.joinPopVisible})
	}

	createPressed() {
		this.setState({createPopVisible: !this.state.createPopVisible})
	}

	render() {
		return (
			<div>
				<div className='button-container'>
					<button className='button' onClick={this.joinPressed}>Join</button><button className='button' onClick={this.createPressed}>Create</button>
					{this.state.joinPopVisible && <JoinRoom state={this.props.state} actions={this.props.actions}/>}
					{this.state.createPopVisible && <CreateRoom state={this.props.state} actions={this.props.actions}/>}
				</div>	
			</div>
		)
	}
}

export default JoinView