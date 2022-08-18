import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import UserSkill from './UserSkill'
import LevelUpSkill from './LevelUpSkill'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmailIcon from '@mui/icons-material/Email';
import Email from './Email'



function Profile({objUser, selectedSkill, selectedUser, handleSelectedUser, handleCreateConversation}) {

    const navigate = useNavigate()
    const id = objUser.id
    const [open, setOpen] = useState(false);
    
    // const handleSendMessage = () =>{
    //     handleCreateConversation(selectedUser.id)

    //     console.log("message")
    //     // navigate('/')
    // }

    const handleOpen = () => {
        fetch(`/teaching_skills/${id}`).then((res) => {
            if(res.ok){
                res.json().then ((user)=> {
                    handleSelectedUser(user)
                    console.log(user.id)
                })
            }
        })
        setOpen(true);
    };
    
    
    const handleClose = () => {
        setOpen(false);
    };

  
    const imageCard = (
        <>
         <Stack direction="column">
         <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="300"
                    image={objUser.profile_image}
                    alt="Profile Pic"
                />
            </CardContent>
            </Box>
            </Stack>
        </>
    );

    const userInfo = (
        
<>
<Stack direction="column">
<Box sx={{ padding: ".1vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
<CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h6" sx={{fontSize: 15}} component="div">
                {objUser.name}
        </Typography>              
        </CardContent> 
</Box>
</Stack>
</>
    )

  


//    console.log(selectedUser)


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


    const handleClick = () => {
        navigate('/email')
    }

  return (
    <Stack sx={{overflow: "scoll"}} justifyContent="space-between" direction="column">
         <Box sx={{ overflow: "scoll", padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
         <Button onClick={handleOpen} variant="contained" size="small">Profile</Button>
         <Modal
                justifyContent="space-between"
                direction="column"
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center", ...style, width: 400 }}>
                <Stack>
                {userInfo}
                </Stack>
                <Stack>  
                    <ChatBubbleOutlineIcon  
                    onClick={() => {handleCreateConversation(selectedUser.id)}} type="button">
                       
                    </ChatBubbleOutlineIcon>
                    {/* <EmailIcon onClick={handleClick}>Contact User</EmailIcon> */}
                <Card>{imageCard}</Card>
                </Stack>
                <Stack>
                <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
     
        <Typography variant="h1" sx={{fontSize: 15}} component="div">
            Skills
        </Typography>
        </Box> 
        </Stack>
                <Stack>                
                {selectedUser ? selectedUser.teaching_skills.map((teaching_skill) => 
                        <UserSkill teaching_skill={teaching_skill}/>
                        ) : null}
                      </Stack> 
                      <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h1" sx={{fontSize: 15}} component="div">
           Skills I am looking to Level Up
        </Typography>
        <Stack>
                <Card>{selectedUser ? selectedUser.learning_skills.map((learning_skill) => <LevelUpSkill learning_skill={learning_skill}/>): null}</Card>
                </Stack>
        </Box> 
         <Button onClick={handleClose}>Back</Button>
                </Box> 
           
            </Modal>      
           
            </Box>
           
    </Stack>
  )
}

export default Profile