import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import {useEffect, useRef, useState} from 'react-router';
import { useParams} from 'react-router';
import { MultiSelectUnstyled } from '@mui/base';
import ChatInput from '../../Components/MessagesPage/ChatInput';


function MessagesPage({onLogOut, user, recipient, cable}){

    const [messages, setMessages] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (user.id) {
          fetch(`/api/users/${user.id}/message_history`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sender_id: user.id,
              recipient_id: recipient.id, 
            })
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                setMessages(data)
              })
            }
          })
        }    
      }, [user.id, recipient.id, setMessages])
    
      useEffect(() => {    
        if (user.id) {
          cable.subscriptions.create
          (
            {
              channel: 'ChatsChannel',
              user_id: user.id,
              recipient_id: recipient.id
            },
            {
              received: (message) => {
                setMessages([...messages, message])
              }
            }
          )
        }
      }, [user.id, cable.subscriptions, recipient.id, setMessages, messages])
    

    return(
        <>
        <Stack>
 
        </Stack>
        </>
    )
}

export default MessagesPage

//    const  renderMessages = () => {
//         return user.messages.map(mess => {
//             return <li key ={mess.id}>{mess.name}:{mess.body}</li>
//         })
//     }

//     const handleBroadCast = (data) =>{
//         console.log(data)
//     }
//     const render = () => {
//         if (!user.channel){
//             return <h1>Loading...</h1>
//         }
//         return (
//             <div className = "chat-container">
//                 <ActionCableConsumer
//                 channel={{channel: "conversation_channel", id: user.channel.id}}
//                 onReceived={handleBroadCast}
//                 />
//                 <h1>{user.channel.name}</h1>
//                 {renderMessages(user.channel)}
//                 <MessageForm key={user.channel.id}/>
//             </div>
//         )
//     }

//     const [messages, setMessages] = useState([])
//     const params = useParams()
//     const [newMessage, setNewMessage] = useState("")
//     const cable = useRef()
//     useEffect(() =>{
//     //    const cable = createConsumer('ws://localhost:3000')

//     if (!cable.current){
//         cable.current = createConsumer('ws://localhost:3000/cable')
//     }
//         const paramsToSend ={
//             channel : "ConversationChannel",
//             id: params.id
//         }

//         const handlers = {
//             received(data) {
//                 setMessages([...messages, data])
//             },
//             connected() {
//                 console.log("connected")
//             },
//             disconnected(){
//                 console.log("disconnected")
//                 cable.current = null
//             }
//         }
//         const subscription = cable.subscriptions.create(paramsToSend, handlers)
        
//         return function cleanup(){
//             console.log("unsubbed from ", params.id)
//             cable.current = null
//             subscription.unsubscribe()
//         }
   
//     }, [params.id, messages])

//  function handleSubmit(e) {
//     e.preventDefault()
//     if (newMessage !== '') {
//         setNewMessage('')
//         fetch('http://localhost:3000/messages', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 body: newMessage,
//                 conversation_id: params.id, 
//                 user_id: user.id
//             })
//         })
//     }

//  }