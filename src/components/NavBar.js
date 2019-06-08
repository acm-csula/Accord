import React from "react"
import {Link} from "react-router-dom";

import './css/NavBar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.methods = props.methods
    }
    render() {
        return (
            <div className="roomNav">
                <div className="roomList">
                    <ul>
                        <li className='item'><Link to='/home'>Home</Link></li>
                        <li className="item"><Link to="/room1">Room1</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar