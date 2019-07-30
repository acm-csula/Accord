import React from 'react'

import './JoinPopUpMenu.css'

const JoinPopUpMenu = (props) => {
	return (
		<div>
    		<div className="createRoom-header text-center">
                <h1> CHOOSE ONE WISELY! </h1>
            </div>
            <div className="createRoom-content">
                <div  className="createRoom-btn-container">
                    <button id="createRoom" className="createRoom-btn" onClick={props.actions.createPressed}> CREATE </button>
                </div>
                <div  className="createRoom-btn-container">
                    <button id="joinRoom" className="createRoom-btn" onClick={props.actions.joinPressed}> JOIN </button>
                </div>
            </div>
    	</div>
	)
}

export default JoinPopUpMenu