import React from 'react'
import {Route} from 'react-router-dom'

import './HomeMenu.css'

import defaultImage from './0.png'  

class HomeMenu extends React.Component {
	constructor(props) {
		super(props)
    
		this.state = {
			status: [
                {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: '#2ecc71'
                },
                {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: 'yellow'
                },
                {
                    display: 'inline-block',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    backgroundColor: 'red'
                }
            ],
            statusIndex: 0
		}

		this.actions = {
			openUserSettings: () => {
				console.log('hey')
			}
		}

		this.updateStatus = this.updateStatus.bind(this)
	}

	updateStatus() {
		if (this.state.statusIndex == 2) {
			this.setState({statusIndex: 0})
		}
		else {
			this.setState({statusIndex: this.state.statusIndex + 1})
		}
		
		this.props.actions.setStatus(this.state.status[this.state.statusIndex])	
	}

	render() {
		return (
			<div className='home-menu-container'>
				<div className='profileView'>
					<div className='iconView'>
						<img className='icon' src={defaultImage}/>
					</div>
					<div className='nameField'>
						<div style={this.props.state.status} onClick={this.updateStatus}/>
						{this.props.state.user.email}
					</div>
				</div>
				<div className="user-panel">
					<button>
						<i className="fas fa-users"></i>
                        <a> Friends </a>
                    </button>
					<button>
						<i className="fas fa-user-cog"></i>
                        <a> Settings </a>
                    </button>
                    <button onClick={this.props.actions.logout}>
						<i className="fas fa-sign-out-alt"></i>
                        <a> Logout </a>
                    </button>
				</div>
				<div className="quick-settings">
				</div>
            </div>
		)
	}
}

export default HomeMenu