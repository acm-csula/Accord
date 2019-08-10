import React from 'react'
import {Route} from 'react-router-dom'
import RoomSubMenu from '../RoomSubMenu/RoomSubMenu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'

import './RoomMenu.css'

class RoomMenu extends React.Component {
	state = {
		serverTitle: '',
		subMenuOpened: false,
		openedMenuStyle: null
	}

	actions = {
		sendInvite: () => {
			this.props.actions.sendInvite()
		},
		deleteRoom: () => {
			this.props.actions.deleteRoom(this.props.room.details.id)
		},
		leaveRoom: () => {
			this.props.actions.leaveRoom(this.props.state.user.uid,this.props.room.details.id)
		}
	}

	handleSubMenuOnClick = () => {
		const negated = !this.state.subMenuOpened

		if (this.state.openedMenuStyle == null) {
			this.setState({
				subMenuOpened: negated,
				openedMenuStyle: {
					backgroundColor: '#232d38'
				}
			})
		}
		else {
			this.setState({
				subMenuOpened: negated,
				openedMenuStyle: null
			})
		}
	}

	handleOuterClick = () => {
		this.setState({subMenuOpened: false})
	}

	componentDidMount() {
		if (this.props.room.details.name.length > 16) {
			const title = this.props.room.details.name.substring(0,16) + '...'
			this.setState({serverTitle: title})
		}
		else {
			this.setState({serverTitle: this.props.room.details.name})
		}
	}

	render() {
		return (
			<div className='room-menu-container'>
				<div className="server-title-header" style={this.state.openedMenuStyle} onClick={this.handleSubMenuOnClick}>
					<a className="server-title">{this.state.serverTitle}<FontAwesomeIcon icon={faSortDown} className='submenu-icon'/></a>
					<div className="username-stats">
						<i style={this.props.state.status.green}></i>
						<a>{this.props.state.user.email}</a>
					</div>
				</div>
				<div className='channel-container' onClick={this.handleOuterClick}>
					<h6>Channels</h6>
					<div className='channel-btns'>
						<button className='channel-btn'>
							<i className='fas fa-hashtag'/>
							<a>{'general'}</a>
						</button>
					</div>
		        </div>
				{this.state.subMenuOpened && <RoomSubMenu state={this.props.state} actions={this.actions} room={this.props.room}/>}
            </div>
		)
	}
}

export default RoomMenu