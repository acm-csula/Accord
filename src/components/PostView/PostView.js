import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeView from '../HomeView/HomeView'
import RoomView from '../RoomView/RoomView'
import JoinPopUp from '../JoinPopUp/JoinPopUp'

import './PostView.css'

const PostView = (props) => {
    const rooms = []

    if (props.state.rooms) {
        Object.keys(props.state.rooms).forEach(key => {
            let room = props.state.rooms[key]

            rooms.push(<Route key={room.details.id} path={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)} render={() => <RoomView room={room} state={props.state} actions={props.actions}/>}/>)
        })
    }

    return (
        <BrowserRouter>
            <div className="view-container">
                <Nav state={props.state} actions={props.actions}/>
                <Route exact path='/home' render={() => <HomeView state={props.state} actions={props.actions}/>}/>
                {rooms}
                {props.state.joinVisible && <JoinPopUp state={props.state} actions={props.actions}/>}
            </div>
        </BrowserRouter>
    )
}

export default PostView