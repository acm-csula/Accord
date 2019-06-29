import React from 'react'
import {Route} from 'react-router-dom'

import './HomeMenu.css'

import defaultImage from './0.png'

class HomeMenu extends React.Component {
	state = {
		username: 'treblegni',
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
		},
		settingsOpen: false
	}

	actions = {
		openUserSettings: () => {
			console.log('hey')
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
						<div style={this.state.status.green}/>
						{this.state.username}
					</div>
				</div>
				<div className='friend-panel'>
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