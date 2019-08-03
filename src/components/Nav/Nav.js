import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = (props) => {
    const ownedRooms = []
    const subbedRooms = []

    if (props.state.ownedRooms) {
        Object.keys(props.state.ownedRooms).forEach(key => {
            let room = props.state.ownedRooms[key]

            ownedRooms.push(<Link key={room.details.id} to={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)}><button>{room.details.name.substring(0,3)}</button></Link>)
        })
    }

    if (props.state.subbedRooms) {
        Object.keys(props.state.subbedRooms).forEach(key => {
            let room = props.state.subbedRooms[key]

            subbedRooms.push(<Link key={room.details.id} to={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)}><button>{room.details.name.substring(0,3)}</button></Link>)
        })
    }

    return (
        <div className='nav-container'>
            <div className="home-local">
                <Link to='/home'><button><i className="fas fa-home"></i></button></Link>
            </div>
            <div className="client-servers">
                {ownedRooms}
                {subbedRooms}
                <div className="join-server">
                    <button onClick={props.actions.joinPressed}><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Nav