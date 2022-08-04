import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

function UserSkillsSettings({user}){

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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

    
    const handleMySkillsClick = (e) => {
     navigate('/userSkillPage')
        
    }

     
    const handleSkillsToLevelUpClick = (e) => {
        navigate('/skillsToLevelUpPage')
           
       }
    

    return (
        <Stack justifyContent="space-between" direction="column">
         <Button onClick={handleOpen} variant="contained" size="small">Update Skills Settings</Button>
         <Modal
                justifyContent="space-between"
                direction="column"
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{ ...style, width: 400 }}>
               <Button onClick={handleMySkillsClick} variant="contained" size="small">My Skills</Button>
               <Button onClick={handleSkillsToLevelUpClick} variant="contained" size="small">Skills To Level Up</Button>  
                
                </Box>   
            </Modal>
            </Stack>
    )
}

export default UserSkillsSettings