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


function Message({
    messageBody, 
    conversationSender, 
    conversationReceiver,
    messageUser
}) {

    const [isUser, setIsUser] = useState(null)

    useEffect(() => {
        function cleanup(){
           if (conversationSender === messageUser) {setIsUser(true)}else
           {setIsUser(false)}
        }
        cleanup()
    })
    
  return (
    <Box sx={{ padding: ".3vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}><Card sx={{bgcolor: isUser === true ? "lightGrey" : "lightBlue", padding: ".5vh"}}>{messageBody}</Card></Box>
  )
}

export default Message