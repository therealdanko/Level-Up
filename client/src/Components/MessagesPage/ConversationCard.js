import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'

function ConversationCard({id,
   sender, 
   receiver, 
   messages, 
   user, 
   selectedUser,
   handleSelectedUser,
  conversation,
  handleSelectedConvo}) {


    let lastMessage 
    if (messages){lastMessage = messages[messages.length - 1]}
    const renderMessage = (
      <Typography variant="h1" sx={{fontSize: 15}} component="div">
        {lastMessage ? lastMessage.body : null}
      </Typography>
    )

  return (
    <div>
    <Link onClick={() => {
      handleSelectedUser(receiver)
      handleSelectedConvo(conversation)
    }} 
      to={`/messagesPage/${id}`} >
    <div className="chat">
        <div  className='chat_details'>
        <Typography  variant="h1" sx={{fontSize: 15}} component="div">
         {receiver.name} 
          </Typography>
          
        </div>
    </div>
  </Link>
  <Stack>
  <Typography variant="h1" sx={{fontSize: 15}} component="div">
        {renderMessage}
      </Typography>
  </Stack>
  </div>
  )
}

export default ConversationCard