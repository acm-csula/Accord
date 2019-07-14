import React from 'react'
import {Route} from 'react-router-dom'
import SubMenu from '../SubMenu/SubMenu'
import ChannelPanel from '../ChannelPanel/ChannelPanel'

import './RoomMenu.css'

class RoomMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			menuPressed: false
		}

		this.actions = {
			onPress: () => {
				let negate = !this.state.menuPressed
				this.setState({menuPressed: negate})
			}
		}
	}

	render() {
		return (
			<div className='room-menu-container'>
				<div className="server-title-header" onClick={this.actions.onPress}>
					<a className="server-title">{this.props.room.name}<i className="fas fa-sort-down"></i></a>
					<div className="username-stats">
						<i style={this.props.state.status.green}></i>
						<a>{this.props.state.user.email}</a>
					</div>
				</div>
				<ChannelPanel/>
				{this.state.menuPressed && <SubMenu actions={this.props.actions}/>}
            </div>
		)
	}
}

export default RoomMenu