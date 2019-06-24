import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="home-local">
                <Link to='/home'><button><i class="fas fa-home"></i></button></Link>
            </div>
            <div className="client-servers">
                <Link to='/acm'><button> ACM </button></Link>
                <div className="join-server">
                    <Link to='/create-room'><button><i class="fas fa-plus"></i></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav