import React from "react"

import './css/RoomView.css'

const RoomView = () => {
    return (
        <div className="roomNav">
            <div>
                <span>HOME</span>
            </div>
            <div className="roomList">
                <ul>
                    <li class="item"><a href="about.html">About</a></li>
                    <li class="item"><a href="resume.html">Resume</a></li>
                    <li class="item"><a href="projects.html">Projects</a></li>
                    <li class="item"><a href="hobbies.html">Things</a></li>
                </ul>
            </div>
        </div>
    )
}

export default RoomView