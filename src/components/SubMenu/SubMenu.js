import React from 'react'

import './SubMenu.css'

class SubMenu extends React.Component {
	render() {
		return (
	    	<div className="user-menu">
				<a className="status-label"> Set status </a>
				<button className="user-stats-online">
				<i class="far fa-circle"></i>
					Online
				</button>
				<button className="user-stats-idle">
				<i class="far fa-circle"></i>
					Idle
				</button>
				<button className="user-stats-invisible">
					<i class="far fa-circle"></i>
					Invisible
				</button>
				<hr></hr>
				<div className="divider"></div>
				<button className="server-set">
					<i class="fas fa-cog"></i>
					Server Settings 
				</button>
				<button className="create-chan"> 
					<i class="fas fa-plus"></i>
					Create Channel 
				</button>
				<hr></hr>
				<div className="divider"></div>
				<button className="logout-btn" onClick={this.props.actions.logout}>
				    <i className="fas fa-sign-out-alt"></i>
				    Logout
				</button>
			</div>
		)
	}
}

export default SubMenu