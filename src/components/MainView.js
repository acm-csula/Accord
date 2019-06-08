import React from "react"
import SubView from './SubView.js'
import ChatView from './ChatView.js'

import './css/MainView.css'

class MainView extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        return (
            <div className="centerView">
            	<div>
            		<SubView/>
            	</div>
            	<div>
            		<ChatView/>
            	</div>
            </div>
        )
    }
}

export default MainView