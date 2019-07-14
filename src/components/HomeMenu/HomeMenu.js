import React from 'react'
import {Route} from 'react-router-dom'

import './HomeMenu.css'

import defaultImage from './0.png'

class HomeMenu extends React.Component {
	constructor(props) {
		super(props)

		this.actions = {
			openUserSettings: () => {
				console.log('hey')
			}
		}
	}

	render() {
		return (
			<div className='home-menu-container'>
				<div className='profileView'>
					<div className='iconView' onClick={this.actions.openUserSettings}>
						<img className='icon' src={defaultImage}/>
					</div>
					<div className='nameField'>
						<div style={this.props.state.status.green}/>
						{this.props.state.user.email}
					</div>
				</div>
				<div className="user-panel">
					<button>
						<i class="fas fa-users"></i>
                        <a> Friends </a>
                    </button>
					<button>
						<i class="fas fa-user-cog"></i>
                        <a> Settings </a>
                    </button>
				</div>
				<div className='friend-panel'>
					<a className="dm-label"> Direct Messages </a>
					<button>
                        <a> {'friend-1'}</a>
                    </button>
                    <button>
                        <a> {'friend-2'}</a>
                    </button>
                    <button> 
                        <a> {'friend-3'}</a>
                    </button>
				</div>
				<div className="quick-settings">
				</div>
            </div>
		)
	}
}

export default HomeMenu