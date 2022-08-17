import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';


function SearchUserCard({objUser, selectedSkill, selectedUser, handleSelectedUser, handleCreateConversation}) {
    console.log(objUser)
    console.log(selectedSkill)

    const userCard = (
      <Stack>
        <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
       {objUser.name}
        </Typography> 
        <CardActions style={{ justifyContent: 'center' }}>        
            <Profile handleCreateConversation={handleCreateConversation} selectedUser={selectedUser} handleSelectedUser={handleSelectedUser} objUser={objUser} selectedSkill={selectedSkill} />
        </CardActions>
        </Box>       
      </Stack>
    )


  return (
    <>
      <Stack justifyContent="space-between" direction="column">
      <Stack>
      <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
      <Card variant="outlined">{userCard}</Card>
      </Box>
      </Stack>
      </Stack>
    </>
  )
}

export default SearchUserCard