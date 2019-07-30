import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = (props) => {
    const rooms = []

    if (props.state.rooms) {
        Object.keys(props.state.rooms).forEach(key => {
            let room = props.state.rooms[key]

            rooms.push(<Link key={room.details.id} to={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)}><button>{room.details.name.substring(0,3)}</button></Link>)
        })
    }
    
    return (
        <div className='nav-container'>
            <div className="home-local">
                <Link to='/home'><button><i className="fas fa-home"></i></button></Link>
            </div>
            <div className="client-servers">
                {rooms}
                <div className="join-server">
                    <Link to='/join'><button><i className="fas fa-plus"></i></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav