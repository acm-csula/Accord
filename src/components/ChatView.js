import React from "react"

import './css/Chat.css'

const ChatView = () => {
    return (
        <div className="chatView">
            <div className="display">
                <table>
                    <tr>
                        <td id="display">Comment history</td>
                    </tr>
                </table>
            </div>
            <div className="inputBox">
                <input id="input" name="input" type="text"/>
            </div>
        </div>
    )
}

export default ChatView