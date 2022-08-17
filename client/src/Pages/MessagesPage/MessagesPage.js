import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import { useParams} from 'react-router';
import { MultiSelectUnstyled } from '@mui/base';
import ConversationCard from '../../Components/MessagesPage/ConversationCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';


function MessagesPage({onLogOut, 
  user, 
  selectedUser, 
  conversations, 
  handleSelectedUser,
  handleSelectedConvo}){

   

    const navigate = useNavigate()

    // let renderConversations 
    // if (conversations && selectedUser) {renderConversations = conversations.map((conversation) => {

    //   return(
    //     <ConversationCard 
    //     key={conversation.id} 
    //     id={conversation.id}
    //     sender={conversation.sender} 
    //     receiver={conversation.receiver} 
    //     messages={conversation.messages}
    //     user={user}
    //     selectedUser={selectedUser}
        
    //     />
    //   )

    // })}

    // const renderConversations = (
    //   {conversations ? conversations.map((conversation) => <ConversationCard 
    //     key={conversation.id} 
    //       id={conversation.id}
    //       sender={conversation.sender} 
    //       receiver={conversation.receiver} 
    //       messages={conversation.messages}
    //       user={user}
    //       selectedUser={selectedUser}/>) : null}
    // )
   

    return(
        <>
      <Stack justifyContent="space-between" direction="column">
      <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Card>
        <Typography variant="h6" sx={{fontSize: 15}} component="div">
                Messages
        </Typography>
        </Card>          
<Stack direction="column">
  
  {conversations ? conversations.map((conversation) => <Box sx={{ padding: ".75vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}><Card sx={{ minHeight: 50}}><ConversationCard 
        key={conversation.id} 
          id={conversation.id}
          conversation={conversation}
          sender={conversation.sender} 
          receiver={conversation.receiver} 
          messages={conversation.messages}
          handleSelectedUser={handleSelectedUser}
          handleSelectedConvo={handleSelectedConvo}
          user={user}
          selectedUser={selectedUser}/></Card></Box>) : null}

</Stack>
        </Box>
        </Stack>
        </>
    )
}

export default MessagesPage