import React from 'react'

import './RoomSubMenu.css'

class RoomSubMenu extends React.Component {
	state = {
		hovering: false,
		inviteCode: this.props.room.details.id
	}

	handleOnMouseOver = () => {
		this.setState({hovering: true})
	}

	handleOnMouseLeave = () => {
		this.setState({hovering: false})
	}

	render() {
		return (
	    	<div className="user-menu" onMouseLeave={this.props.actions.handleOnMouseLeave}>
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