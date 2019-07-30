import React from 'react'
import {Route} from 'react-router-dom'
import SubMenu from '../SubMenu/SubMenu'
import ChannelPanel from '../ChannelPanel/ChannelPanel'

import './RoomMenu.css'

class RoomMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			menuPressed: false,
			openedMenuStyle: null
		}

		this.actions = {
			onPress: () => {
				let negate = !this.state.menuPressed

				if (this.state.openedMenuStyle == null) {
					this.setState({
						menuPressed: negate,
						openedMenuStyle: {
							backgroundColor: '#232d38'
						}
					})
				}
				else {
					this.setState({
						menuPressed: negate,
						openedMenuStyle: null
					})
				}
			}
		}
	}

	render() {
		return (
			<div className='room-menu-container'>
				<div className="server-title-header" style={this.state.openedMenuStyle}>
					<a className="server-title">{this.props.room.details.name}
					<i className="fas fa-sort-down" onClick={this.actions.onPress}></i></a>
					<div className="username-stats">
						<i style={this.props.state.status.green}></i>
						<a>{this.props.state.user.email}</a>
					</div>
				</div>
				<ChannelPanel/>
				{this.state.menuPressed && <SubMenu state={this.props.state} actions={this.props.actions} room={this.props.room}/>}
            </div>
		)
	}
}

export default RoomMenu