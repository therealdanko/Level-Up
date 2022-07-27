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



function UserInfoPage({user, onDelete}) {

    const navigate = useNavigate()

    const handleDeleteButton = (e) =>{
         fetch('/users',{
       method: "DELETE" 
    })
    onDelete(null)
    navigate('/signup')
    }

    
    const handleBackButton = (e) => {
        navigate('/settingsPage')
    }


    const nameCard = (
        <>
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {user.name}
        </Typography>              
        </CardContent> 
        </>
    )

    
    const emailCard = (
        <>
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {user.email_address}
        </Typography>  
         </CardContent> 
        </>
    )

    const updateEmailButton = (
        <Stack>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small"variant="contained">Update Email</Button>
            </CardActions>            
        </Stack>
    )

    const userNameCard = (
        <Stack direction ="column">
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {user.username}
        </Typography>  
         </CardContent> 
        </Stack>
    )

    const changeUsernameButton = (
        <Stack>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small"variant="contained">Change Username</Button>
            </CardActions>            
        </Stack>
    )

    const passwordCard = (
        <>
       <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained">Change Password</Button>
            </CardActions>
        </>
    )

    const deleteAccountButton = (
        <Stack>
            <CardActions style={{ justifyContent: 'center' }}>
             <Button onClick={handleDeleteButton} color="error" size="large" variant="contained">Delete Account</Button>
             </CardActions>
        </Stack>
    )


    return(
        <>
         <Stack justifyContent="space-between" direction="column">
         <Stack>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{nameCard}</Card>
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{emailCard}</Card>
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    {updateEmailButton}
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{userNameCard}</Card>
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    {changeUsernameButton}
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    {passwordCard}
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    {deleteAccountButton}
                </Box>
            </Stack>
        <Button onClick={handleBackButton}>Back</Button>
        </Stack>
        </>
    )
}

export default UserInfoPage