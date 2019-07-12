import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeView from '../HomeView/HomeView'
import RoomView from '../RoomView/RoomView'

import './PostView.css'

const PostView = (props) => {
    const routes = props.state.rooms.map(room => <Route path={'/' + room.name} render={() => <RoomView room={room} state={props.state} actions={props.actions}/>}/>)
	
    return (
		<BrowserRouter>
            <div className="view-container">
                <Nav rooms={props.state.rooms}/>
                <Route exact path='/home' render={() => <HomeView state={props.state} actions={props.actions}/>}/>
                {routes}
                <Route path='/create-room'/>
            </div>
        </BrowserRouter>
    )
}

export default PostView