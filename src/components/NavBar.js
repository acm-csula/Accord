import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './css/NavBar.css'

class NavBar extends React.Component {
    render() {
        console.log(this.props.status)
        return (
            <Router>
                <div className="roomNav">
                    <div className="roomList">
                        <ul>
                            <li className='item'><Link to='/home' onClick={'hey'}>Home</Link></li>
                            <li className="item"><Link to="/room1" onClick={'hey'}>Room1</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}

export default NavBar