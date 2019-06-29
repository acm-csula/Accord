import React from 'react'
import {Link} from 'react-router-dom'

import './ChannelPanel.css'

const ChannelPanel = () => {
	return (
        <div className='channel-container'>
    		<h6> Channels </h6>
            <div className="channel-btns">
                <button className="channel-btn">
                    <i class="fas fa-hashtag"></i> 
                    <a> {'general'}</a>
                </button>
            </div>
        </div>
	)
}

export default ChannelPanel