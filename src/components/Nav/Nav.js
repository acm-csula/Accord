import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <div className="home-local">
                    <Link to='/home'><button><i className="fas fa-home"></i></button></Link>
                </div>
                <div className="client-servers">
                    <Link to={'/' + this.props.rooms[0].name}><button> {this.props.rooms[0].name.substring(0,3)} </button></Link>
                    <div className="join-server">
                        <Link to='/create-room'><button><i className="fas fa-plus"></i></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav