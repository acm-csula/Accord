import React from 'react'

import './SubMenu.css'

const SubMenu = (props) => {
	return (
    	<div className="user-menu">
			<button className="user-stats-online">
			<i className="far fa-paper-plane"></i>
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
			{props.room.details.ownerId == props.state.user.uid && <button className="logout-btn">
			    <i className="fas fa-times-circle"></i>
			    Close Room
			</button>}
			{props.room.details.ownerId != props.state.user.uid && <button className="logout-btn">
			    <i className="fas fa-times-circle"></i>
			    Leave Room
			</button>}
		</div>
	)
}

export default SubMenu