import React from 'react'
import ProfileView from './ProfileView.js'

import './css/HomeMenu.css'

class HomeMenu extends React.Component {
	render() {
		return (
	        <div className='optionsView'>
	            <ProfileView></ProfileView>
	        </div>
	    )
	}
}

export default HomeMenu