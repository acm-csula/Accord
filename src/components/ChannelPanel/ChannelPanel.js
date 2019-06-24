import React from 'react'
import {Link} from 'react-router-dom'

import './ChannelPanel.css'

const ChannelPanel = () => {
	return (
        <div className='channel-container'>
    		<h6> Channels </h6>
            <div className="channel-btns">
                <Link to='/acm/general'>
                    <button className="channel-btn">
                        <i class="fas fa-hashtag"></i> 
                        <a> general </a>
                    </button>
                </Link>
            </div>
            <div className="channel-btns">
                <Link to='/acm/random'>
                    <button className="channel-btn">
                        <i class="fas fa-hashtag"></i> 
                        <a> random </a>
                    </button>
                </Link>
            </div>
        </div>
	)
}

export default ChannelPanel