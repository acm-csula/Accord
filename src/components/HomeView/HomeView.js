import React from "react"
import HomeMenu from '../HomeMenu/HomeMenu'

import './HomeView.css'

const HomeView = (props) => {
    return (
        <div className="centerView">
        	<HomeMenu state={props.state} actions={props.actions}/>
        </div>
    )
}

export default HomeView