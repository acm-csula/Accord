import React from 'react'

import AddUserPopUp from '../InvitePopUp/InvitePopUp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane,faCog,faPlus,faTimesCircle} from '@fortawesome/free-solid-svg-icons'

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
	    	<div className="user-menu">
	    		{this.state.hovering && <div className='invite-container'><input value={'localhost:3000/' + this.state.inviteCode} onMouseLeave={this.handleOnMouseLeave}></input></div>}
				<button className="user-stats-online" onMouseOver={this.handleOnMouseOver} onClick={this.props.actions.sendInvite}>
					<FontAwesomeIcon icon={faPaperPlane} className='submenu-icon'/>
					Send Invite
				</button>
				<hr></hr>
				<div className="divider"></div>
				<button className="server-set">
					<FontAwesomeIcon icon={faCog} className='submenu-icon'/>
					Server Settings
				</button>
				<button className="create-chan"> 
					<FontAwesomeIcon icon={faPlus} className='submenu-icon'/>
					Create Channel
				</button>
				<hr></hr>
				<div className="divider"></div>
				{this.props.room.details.ownerId == this.props.state.user.uid && <button className="logout-btn" onClick={this.props.actions.deleteRoom}>
				    <FontAwesomeIcon icon={faTimesCircle} className='submenu-icon'/>
				    Close Room
				</button>}
				{this.props.room.details.ownerId != this.props.state.user.uid && <button className="logout-btn" onClick={this.props.actions.leaveRoom}>
				    <FontAwesomeIcon icon={faTimesCircle} className='submenu-icon'/>
				    Leave Room
				</button>}
			</div>
		)
	}
}

export default RoomSubMenu