import React from 'react'
import {Route} from 'react-router-dom'
import RoomSubMenu from '../RoomSubMenu/RoomSubMenu'
import ChannelPanel from '../ChannelPanel/ChannelPanel'

import './RoomMenu.css'

class RoomMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			serverTitle: '',
			menuPressed: false,
			openedMenuStyle: null
		}

		this.handleOnClick = this.handleOnClick.bind(this)
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

	handleOnClick() {
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

	render() {
		return (
			<div className='room-menu-container'>
				<div className="server-title-header" style={this.state.openedMenuStyle} onClick={this.handleOnClick}>
					<a className="server-title">{this.state.serverTitle}<i className="fas fa-sort-down"></i></a>
					<div className="username-stats">
						<i style={this.props.state.status.green}></i>
						<a>{this.props.state.user.email}</a>
					</div>
				</div>
				<ChannelPanel/>
				{this.state.menuPressed && <RoomSubMenu state={this.props.state} actions={this.props.actions} room={this.props.room}/>}
            </div>
		)
	}
}

export default RoomMenu