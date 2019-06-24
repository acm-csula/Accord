import React from 'react'

import './UserMenu.css'

class UserMenu extends React.Component {
	render() {
		return (
	    	<div className="user-menu">
				<button className="user-stats">
					<i class="fas fa-circle"></i>
					Set a Status..
				</button>
				<button className="account-set">
					<i class="fas fa-user"></i>
					Profile & Account 
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
				<button className="notifi">
					<i class="far fa-bell"></i>
					Notifications Settings
				</button>
				<div className="divider"></div>
				<button className="logout-btn">
				    <i class="fas fa-sign-out-alt"></i>
				    Logout
				</button>
			</div>
		)
	}
}

export default UserMenu