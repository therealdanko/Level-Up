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

function UserSkillsAppBAr({user, skills, selectedSkill, handleSelectedSkill}) {

    // const[inMySelect, setInMySelect] = useState("")
    // const[inAddSelect, setInAddSelect] = useState("")
    
   
    

    // const handleMySkillsChange = (event) => {
    //   setInMySelect(event.target.value);
    
    //   };
    
     
    // const handleSkillsChange = (event) => {
    //     setInAddSelect(event.target.value);
    // };

    // const showSelectedSkill = () => {
    //   // setSelectedSkill(event)
    //   handleSelectedSkill(inMySelect);
      
       
    // }

    
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

    
  
    

    return(
        <>
        <AppBar position="static">
        <Stack justifyContent="space-between" direction="row">
        <Stack justifyContent="space-between" direction="row"> 
        <AddIcon type="button"  sx={{size:"large"}}>
          <IconButton startIcon={<AddIcon/>} onClick={handleOpen}>
        <Modal
        justifyContent="space-between"
        direction="column"
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">

        </Modal>
        </IconButton>
        </AddIcon>
        </Stack>
        {/* <Stack justifyContent="space-between" direction="row">
        <FormControl sx={{ m: 1, minWidth: 150, width: 150}} size="small">
        <InputLabel id="demo-simple-select-label">My Skills
        </InputLabel>
        <Select
          labelId="demo-simple--label"
          id="demo-simple-select"
          value={inMySelect}
          label="MySkills"
          onChange={handleMySkillsChange}
        >
        {user.skills.map((skill) => <MenuItem onClick={showSelectedSkill} value={skill} >{`${skill.name}`}</MenuItem>)}
        </Select>            
            </FormControl>
            </Stack> */}
            {/* <Stack justifyContent="space-between" direction="row">
              <FormControl sx={{ m: 1, minWidth: 110, width: 110 }} size="small">
        <InputLabel id="demo-simple-select-label">Add Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inAddSelect}
          label="SkillsList"
          onChange={handleSkillsChange}
        >
            {skills.map((skill) =>  <MenuItem value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
           </Stack> */}
            </Stack>
        </AppBar>
        </>
    )
}

export default UserSkillsAppBAr