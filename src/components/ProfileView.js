import React from 'react'

import './css/ProfileView.css'

//In practive, we query image for database
const imgURL = './img/0.png'

const ProfileView = () => {
	const color = 'green'
	const username = 'treblegni'
	const name = 'Ingelbert'
	const age = '29'
	const status = {
		borderRadius: '50%',
		width: '10px',
		height: '10px',
		marginRight: '5px',
		backgroundColor: 'red'
	}
	
	return (
		<div className='profileView'>
			<div className='iconView'>
				<img className='profileIcon' src={imgURL}/>
				<div className='nameField'>
					<div style={status}/>
					{username}
				</div>
			</div>
			<div className='details'>
				<span>Name: {name}</span>
				<br/>
				<span>Age: {age}</span>
			</div>
		</div>
	)
}

export default ProfileView