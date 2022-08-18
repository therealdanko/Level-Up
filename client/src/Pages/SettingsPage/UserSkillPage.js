import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { convertLength } from '@mui/material/styles/cssUtils';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MySkillInfo from '../../Components/SettingsPage/MySkillInfo'
import UserSkillsAppBAr from '../../Components/SettingsPage/UserSkillsAppBar';
import AddNewSkill from '../../Components/SettingsPage/AddNewSkill';





function UserSkillPage({user,
     skills, 
     userSkills, 
     handleSelectedSkill, 
     handleUserSkills,
     selectedSkill,
     handleAddNewSkill,
     handeUpdateSkill
    }) {

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

    const handleBackButton = (e) => {
        navigate('/settingsPage')
    }

    const addSkill = (
   <AddNewSkill
   handleAddNewSkill={handleAddNewSkill}
   handleClose={handleClose}
   selectedSkill={selectedSkill} 
   handleSelectedSkill={handleSelectedSkill} 
   skills={skills}/>
    )
       
  
    
  
   

    return (
        <>
        
         <Stack justifyContent="space-between" direction="row">
        {/* <UserSkillsAppBAr user={user}  skills={skills} />
         */}
        </Stack> 
        <Stack>
           <MySkillInfo handeUpdateSkill={handeUpdateSkill} selectedSkill={selectedSkill} handleSelectedSkill={handleSelectedSkill} handleUserSkills={handleUserSkills} userSkills={userSkills} />
           
            </Stack> 
            <Button onClick={handleOpen} variant="contained">Add Skill</Button>
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
                {addSkill}
                </Stack>
                </Box>
            </Modal>
            

     
       <Button onClick={handleBackButton}>Back</Button>
        </>
)
}

export default UserSkillPage