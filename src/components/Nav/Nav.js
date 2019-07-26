import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = (props) => {
    const rooms = props.rooms.map(room => <Link to={'/' + room.name}><button> {room.name.substring(0,3)} </button></Link>)

    return (
        <div className='nav-container'>
            <div className="home-local">
                <Link to='/home'><button><i className="fas fa-home"></i></button></Link>
            </div>
            <div className="client-servers">
                {rooms}
                <div className="join-server">
                    <Link to='/create-room'><button><i className="fas fa-plus"></i></button></Link>
                </div>
            </div>
            <div className="createRoom-container">
                <div className="createRoom-header text-center">
                    <h1> CHOOSE ONE WISELY! </h1>
                </div>
                <div className="createRoom-content">
                    <div  className="createRoom-btn-container">
                        <button id="createRoom" className="createRoom-btn"> CREATE </button>
                    </div>
                    <div  className="createRoom-btn-container">
                        <button id="joinRoom" className="createRoom-btn"> JOIN </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav