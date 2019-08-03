import React from 'react'

import './RoomSubMenu.css'

class RoomSubMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			hovering: false,
			inviteCode: this.props.room.details.id
		}

		this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
		this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
	}

	handleOnMouseOver() {
		this.setState({hovering: true})
	}

	handleOnMouseLeave() {
		this.setState({hovering: false})
	}

	render() {
		return (
	    	<div className="user-menu">
	    		{this.state.hovering && <div className='invite-container'><input value={'localhost:3000/' + this.state.inviteCode} onMouseLeave={this.handleOnMouseLeave}></input></div>}
				<button className="user-stats-online" onMouseOver={this.handleOnMouseOver}>
				<i className="far fa-paper-plane" onClick={this.props.actions.sendInvite}></i>
					Send Invite
				</button>
				<hr></hr>
				<div className="divider"></div>
				<button className="server-set">
					<i className="fas fa-cog"></i>
					Server Settings 
				</button>
				<button className="create-chan"> 
					<i className="fas fa-plus"></i>
					Create Channel 
				</button>
				<hr></hr>
				<div className="divider"></div>
				{this.props.room.details.ownerId == this.props.state.user.uid && <button className="logout-btn">
				    <i className="fas fa-times-circle"></i>
				    Close Room
				</button>}
				{this.props.room.details.ownerId != this.props.state.user.uid && <button className="logout-btn">
				    <i className="fas fa-times-circle"></i>
				    Leave Room
				</button>}
			</div>
		)
	}
}

export default RoomSubMenu