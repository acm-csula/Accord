import React from "react"
import HomeMenu from '../HomeMenu/HomeMenu'

import './HomeView.css'

class HomeView extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        return (
            <div className="centerView">
            	<HomeMenu/>
            </div>
        )
    }
}

export default HomeView