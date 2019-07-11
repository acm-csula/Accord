import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeView from '../HomeView/HomeView'
import RoomView from '../RoomView/RoomView'

import './PostView.css'

class PostView extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            user: 'treblegni',
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
    }

	render() {
		return (
			<BrowserRouter>
                <div className="view-container">
                    <Nav rooms={this.props.state.rooms}/>
                    <Route exact path='/home' component={HomeView}/>
                    <Route path={'/' + this.props.state.rooms[0].name} render={() => <RoomView room={this.props.state.rooms[0]} state={this.props.state} actions={this.props.actions}/>}/>
                    <Route path='/create-room'/>
                </div>
            </BrowserRouter>
        )
	}
}

export default PostView