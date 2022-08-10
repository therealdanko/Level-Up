import React from 'react'
import {useState} from 'react'

function ChatInput({user, recipientId, messages, setMessages}) {

    const [chatInput, setChatInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (chatInput !== '') {
          fetch(`/api/users/${user.id}/create_message`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sender_id: user.id,
              recipient_id: recipientId,
              content: chatInput
            })
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                setChatInput('')
                setMessages([...messages, data])
              })
            }
          })
        }    
      }

  return (
    <div>ChatInput</div>
  )
}

export default ChatInput