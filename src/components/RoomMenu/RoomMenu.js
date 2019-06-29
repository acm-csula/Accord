import React from 'react'
import {Route} from 'react-router-dom'
import SubMenu from '../SubMenu/SubMenu'
import ChannelPanel from '../ChannelPanel/ChannelPanel'

import './RoomMenu.css'


class RoomMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: 'treblegni',
			menuPressed: false,
			status: {
				green: {
					display: 'inline-block',
					height: '14px',
					width: '14px',
					borderRadius: '50%',
					marginRight: '0.5rem',
					backgroundColor: '#2ecc71'
					
				},
				red: {
					display: 'inline-block',
					height: '10px',
					width: '10px',
					borderRadius: '50%',
					marginRight: '0.5rem',
					backgroundColor: '#2ecc71'
				},
				yellow: {
					display: 'inline-block',
					height: '10px',
					width: '10px',
					borderRadius: '50%',
					marginRight: '0.5rem',
					backgroundColor: '#2ecc71'
				}
			}
		}

		this.actions = {
			onPress: () => {
				let negate = !this.state.menuPressed
				this.setState({menuPressed: negate})
			},
			changeStatus: () => {

			}
		}
	}

	render() {
		return (
			<div className='room-menu-container'>
				<div className="server-title-header" onClick={this.actions.onPress}>
					<a className="server-title">ACM @CSULA<i class="fas fa-sort-down"></i></a>
					<div className="username-stats">
						<i style={this.state.status.green}>{console.log(this.state.status.green)}</i>
						<a>{this.state.user}</a>
					</div>
				</div>
				<ChannelPanel/>
				{this.state.menuPressed && <SubMenu actions={this.props.actions}/>}
            </div>
		)
	}
}

export default RoomMenu