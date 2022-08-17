import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {createConsumer} from "@rails/actioncable"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import Message from './Message'



function Conversation ({conversations,
     user, 
     selectedUser, 
     handleSelectedUser, 
     conversation}){

    let {id} = useParams()

    const [newMessageData, setNewMessageData] = useState({})
    const [messages, setMessages] = useState([])
  
   
    useEffect(() => {
        fetch(`/conversation/${id}/messages`)
         .then((r) => r.json())
         .then((data) => {
            setMessages(data);
            console.log(data)  
            // setSelectedId(data[0].conversation.receiver_id)          
         });
    }, []);

   
    
useEffect(() => {
const cable = createConsumer("ws://localhost:3000/cable")

const paramsToSend = {
    channel: "ConversationChannel",
    id: id
}

const handlers = {
    received(data){
        setMessages([...messages,data])
    },

    connected(){
        console.log("Connected!")
    },

    disconnected(){
        console.log("disconnected")
    }
}

const subscription = cable.subscriptions.create( paramsToSend, handlers )
return function cleanup(){
    console.log("unsubbing from", id)
    cable.current = null
    subscription.unsubscribe()
}
}, [id, messages])


const handleChange = (e) => {
    setNewMessageData({
        user_id: user.id,
        body: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/conversation/${conversation.id}/messages`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessageData),
    })
    e.target.value = ''
 
}



    return(
        <Stack  justifyContent="space-between" direction="column">
                  <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Typography  variant="h1" sx={{fontSize: 17}} component="div">
        Messages with {selectedUser.name}

        
                    </Typography>

            </Box>
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Typography  variant="h1" sx={{fontSize: 17, }} component="div">
                     
        {messages.map((message) => 
        <Message 
        messageBody={message.body} 
        conversationSender={conversation.sender_id} conversationReceiver={conversation.receiver_id} 
        messageUser={message.user_id}
        />)}
                    </Typography>

            </Box>
       
        <Stack className="chatScreen_input">
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <form name="message-form" onSubmit={handleSubmit}>
            <FormControl onChange={handleChange}>
                   <Stack>
                        <Input variant="filled" bg="tertiary" type="text" value={newMessageData.body} class="form-control" id="messageInput" placeholder="Type a message..." width={400}/>
                         <Button  variant="solid" bg="secondary" type="submit" width={75} > SEND </Button>   
                     </Stack>
                </FormControl>
            </form>

        </Box>
        </Stack>
        </Stack>
    )
}

export default Conversation