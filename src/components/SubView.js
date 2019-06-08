import React from 'react'
import ProfileView from './ProfileView.js'

import './css/SubView.css'

class SubView extends React.Component {
	render() {
		return (
	        <div className='optionsView'>
	            <ProfileView></ProfileView>
	        </div>
	    )
	}
}

export default SubView