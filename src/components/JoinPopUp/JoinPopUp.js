import React from 'react'
import CreateForm from '../CreateForm/CreateForm'
import JoinForm from '../JoinForm/JoinForm'
import JoinPopUpMenu from '../JoinPopUpMenu/JoinPopUpMenu'

import './JoinPopUp.css'

class JoinPopUp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			joinSelected: false,
			createSelected: false
		}

		this.actions = {
			joinPressed: () => {
				this.setState({joinSelected: !this.state.joinSelected})
			},
			createPressed: () => {
				this.setState({createSelected: !this.state.createSelected})
			}
		}
	}
	render() {
		return (
			<div className="join-pop-up-container">
				<div className='close-icon'><i className="fas fa-times" onClick={this.props.actions.joinPressed}></i></div>
                {!this.state.joinSelected && !this.state.createSelected && <JoinPopUpMenu state={this.state} actions={this.actions}/>}
                {this.state.joinSelected && <JoinForm state={this.props.state} actions={this.props.actions}/>}
                {this.state.createSelected && <CreateForm state={this.props.state} actions={this.props.actions}/>}
            </div>
		)
	}
}

export default JoinPopUp