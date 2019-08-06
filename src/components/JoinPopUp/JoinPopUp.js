import React from 'react'
import CreateForm from '../CreateForm/CreateForm'
import JoinForm from '../JoinForm/JoinForm'

import './JoinPopUp.css'

class JoinPopUp extends React.Component {
	state = {
		joinSelected: false,
		createSelected: false
	}

	joinPressed = () => {
		this.setState({joinSelected: !this.state.joinSelected})
	}

	createPressed = () => {
		this.setState({createSelected: !this.state.createSelected})
	}

	render() {
		return (
			<div className="join-pop-up-container">
				<div className='close-icon'><i className="fas fa-times" onClick={this.props.actions.plusPressed}></i></div>
				{!this.state.joinSelected && !this.state.createSelected &&
					<div>
			    		<div className="createRoom-header text-center">
			                <h1> CHOOSE ONE WISELY! </h1>
			            </div>
			            <div className="createRoom-content">
			                <div  className="createRoom-btn-container">
			                    <button id="createRoom" className="createRoom-btn" onClick={this.createPressed}> CREATE </button>
			                </div>
			                <div  className="createRoom-btn-container">
			                    <button id="joinRoom" className="createRoom-btn" onClick={this.joinPressed}> JOIN </button>
			                </div>
			            </div>
			    	</div>
		    	}
                {this.state.joinSelected && <JoinForm actions={this.props.actions}/>}
                {this.state.createSelected && <CreateForm actions={this.props.actions}/>}
            </div>
		)
	}
}

export default JoinPopUp