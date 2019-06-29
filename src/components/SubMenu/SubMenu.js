import React from 'react'

import './SubMenu.css'

class SubMenu extends React.Component {
	render() {
		return (
	    	<div className="user-menu">
				<button className="user-stats">
					<i class="fas fa-circle"></i>
					Set a Status..
				</button>
				<div className="divider"></div>
				<button className="server-set">
					<i class="fas fa-cog"></i>
					Server Settings 
				</button>
				<button className="create-chan"> 
					<i class="fas fa-plus"></i>
					Create Channel 
				</button>
				<div className="divider"></div>
				<button className="logout-btn" onClick={this.props.actions.logout}>
				    <i class="fas fa-sign-out-alt"></i>
				    Logout
				</button>
			</div>
		)
	}
}

export default SubMenu