import React, { useEffect, useState, useRef } from 'react'
import ChatInput from './ChatInput'

function Chat({user, recipient, cable}) {
    const [messages, setMessages] = useState([])

    // useEffect(() => {
    //     return function () {   
    //       fetch('/api/matches', {
    //         method: "PATCH",
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           user_id: user.id,
    //           browsed_user_id: recipient.id,
    //           last_read_at: Date()
    //         })
    //       })
    //     }
    //   }, [user.id, recipient.id, pairId])

  return (
    <div>Chat</div>
  )
}

export default Chat