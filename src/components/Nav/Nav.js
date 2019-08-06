import React from 'react'
import {Link} from 'react-router-dom'

import JoinPopUp from '../JoinPopUp/JoinPopUp'

import './Nav.css'

class Nav extends React.Component {
    state = {
        joinVisible: false
    }

    actions = {
        join: (inviteCode) => {
            this.props.actions.joinRoom(inviteCode)
        },
        create: (roomDetails) => {
            this.props.actions.createRoom(roomDetails)
        },
        plusPressed: () => {
            this.setState({joinVisible: !this.state.joinVisible})
        }
    }

    render() {
        const ownedRooms = []
        const subbedRooms = []

        if (this.props.state.ownedRooms) {
            Object.keys(this.props.state.ownedRooms).forEach(key => {
                let room = this.props.state.ownedRooms[key]

                ownedRooms.push(<Link key={room.details.id} to={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)}><button>{room.details.name.substring(0,3)}</button></Link>)
            })
        }

        if (this.props.state.subbedRooms) {
            Object.keys(this.props.state.subbedRooms).forEach(key => {
                let room = this.props.state.subbedRooms[key]

                subbedRooms.push(<Link key={room.details.id} to={'/' + room.details.name + '-' + room.details.id.substring(room.details.id.length - 16,room.details.id.length)}><button>{room.details.name.substring(0,3)}</button></Link>)
            })
        }

        return (
            <div className='nav-container'>
                <div className="home-local">
                    <Link to='/home'><button><i className="fas fa-home"></i></button></Link>
                </div>
                <div className="client-servers">
                    {ownedRooms}
                    {subbedRooms}
                    <div className="join-server">
                        <button onClick={this.actions.plusPressed}><i className="fas fa-plus"></i></button>
                    </div>
                </div>
                {this.state.joinVisible && <JoinPopUp actions={this.actions}/>}
            </div>
        )
    }
}

export default Nav