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

    const [email, setEmail] = useState(user.email_address)
    const [username, setUsername] = useState(user.username)
    const [updatedEmail, setUpdatedEmail] = useState("")
    const [passwordField, setPasswordField] = useState("")
    const [usernameField, setUsernameField] = useState("")
    const [name, setName] = useState(user.name)

    
    const navigate = useNavigate()


    const [openEmail, setOpenEmail] = useState(false);
    const [openUsername, setOpenUsername] = useState(false);

    const handleOpenEmail = () => {
        setOpenEmail(true);
    };

    const handleCloseEmail = () => {
       
        setOpenEmail(false);
    };

    const handleOpenUsername = () => {
        setOpenUsername(true);
    };

    const handleCloseUsername = () => {
       
        setOpenUsername(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };


    const handleDeleteButton = (e) =>{
         fetch('/me',{
       method: "DELETE" 
    })
    onDelete(null)
    navigate('/signup')
    }

    const handleEmailUpdate = (e) =>{
        e.preventDefault();
        fetch('/me', {
            method: "PATCH",
            headers: {"Content-Type":"application/json"}, 
            body: JSON.stringify({
                email_address: updatedEmail,
                password: passwordField
        })
        })
        .then(r =>r.json())
        .then(console.log)
        setEmail(updatedEmail)
        setUpdatedEmail("")
        setPasswordField("")  

    }

    
    const handleUsernameUpdate = (e) =>{
        e.preventDefault();
        fetch('/me', {
            method: "PATCH",
            headers: {"Content-Type":"application/json"}, 
            body: JSON.stringify({
                username: usernameField,
                password: passwordField
        })
        })
        .then(r =>r.json())
        .then(console.log)
        setUsername(usernameField)
        setUsernameField("")
        setPasswordField("")
       

    }

    
    
    const handleBackButton = (e) => {
        navigate('/settingsPage')
    }

    console.log(updatedEmail)
    const nameCard = (
        <>
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {name}
        </Typography>              
        </CardContent> 
        </>
    )

    
    const emailCard = (
        <>
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {email}
        </Typography>  
         </CardContent> 
        </>
    )


    const updateEmailButton = (
        <Stack>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button onClick={handleOpenEmail} size="small"variant="contained">Update Email</Button>
                <Modal
                justifyContent="space-between"
                direction="column"
                open={openEmail}
                onClose={handleCloseEmail}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{ ...style, width: 400 }}>
                <form  onSubmit={handleEmailUpdate}  id="emailupdate">
             <TextField
                        autoFocus
                        margin="dense"
                        id="Email-Address"
                        name="Email-Address"
                        label="New Email Adress"
                        type="text"
                        value= {updatedEmail}
                        onChange={(e) =>setUpdatedEmail(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Password"
                        name="Password"
                        type="password" 
                        label="Confirm With Password"
                        value= {passwordField}
                        onChange={(e) =>setPasswordField(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
               <Button  variant="contained"  type="submit" form="emailupdate" size="small">Accept</Button>
               <Button onClick={handleCloseEmail} type="button">Back</Button>
               </form>
                
                </Box>    
            </Modal>
            </CardActions>            
        </Stack>
    )

  
    const userNameCard = (
        <Stack direction ="column">
        <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {username}
        </Typography>  
         </CardContent> 
        </Stack>
    )

    const changeUsernameButton = (
        <Stack>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button onClick={handleOpenUsername} size="small"variant="contained">Change Username</Button>
                <Modal
                justifyContent="space-between"
                direction="column"
                open={openUsername}
                onClose={handleCloseUsername}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{ ...style, width: 400 }}>
                <form  onSubmit={handleUsernameUpdate}  id="updateusername">
             <TextField
                        autoFocus
                        margin="dense"
                        id="Username"
                        name="Username"
                        label="New Username"
                        type="text"
                        value= {usernameField}
                        onChange={(e) =>setUsernameField(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="Password"
                        name="Password"
                        type="password" 
                        label="Confirm With Password"
                        value= {passwordField}
                        onChange={(e) =>setPasswordField(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
               <Button  variant="contained"  type="submit" form="updateusername" size="small">Accept</Button>
               <Button onClick={handleCloseUsername} type="button">Back</Button>
               </form>
                
                </Box>    
            </Modal>

                
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