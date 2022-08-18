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
import { useParams } from 'react-router-dom'

function MySkillInfoCard(skill, selectedSkill, handeUpdateSkill ,handleUserSkills, handleSelectedSkill) {

    let {id} = useParams()

    const navigate = useNavigate()

    const [description, setDescription] = useState(skill.skill.description)
    const [credentials, setCredentials] = useState(skill.skill.credentials)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      // handleSelectedSkill(skill.skill.id)
        setOpen(true);
    };

    console.log(selectedSkill)
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


    const handleDeleteButton = () =>{
        fetch(`/teaching_skills/${skill.skill.id}`, {
            method: "DELETE",
        })
        handleUserSkills(skill.skill.id)
     
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/teaching_skill/${skill.skill.id}`, {
          method: "PATCH",
          headers: {"Content-Type":"application/json"}, 
          body: JSON.stringify({
              description: description,
              credentials: credentials
      })
      })
      .then(r =>r.json())
      .then(console.log)
      .then((skill) => {
       handeUpdateSkill(skill)
       
      })
      setDescription(description)
      setCredentials(credentials) 
    } 

    const descripCard = (
      <>
     
      <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
       <form onSubmit={handleSubmit} id="editForm">
              <FormControl>
                  <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                  <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {skill.skill.skill_name}
        </Typography>
      <Typography>
          Description
      </Typography>
      </Box>
      <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
      <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      name= "description"
                      label="description"
                      type="text"
                      value= {description}
                      onChange={(e) =>setDescription(e.target.value)}
                      fullWidth
                      variant="standard"
                  />
                  </Box>
                  <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                  <TextField
                      autoFocus
                      margin="dense"
                      id="credentials"
                      name="credentials"
                      label="credentials"
                      type="text"
                      value= {credentials}
                      onChange={(e) =>setCredentials(e.target.value)}
                      fullWidth
                      variant="standard"
                  />
         </Box>
         
         
     </FormControl>
     </form> 
     <Button
     variant="contained"
                  type="submit"
                  form="editForm"
                  onSubmit={handleSubmit}
                  onClick={handleClose}
                  >Edit</Button>
      </Box>
      
      </>
  )
    

   console.log(skill.skill.id)

const infoCard = (
    <Stack direction="column">
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {skill.skill.skill_name}
        </Typography>
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Description
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {skill.skill.description}
        </Typography>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Credentials
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {skill.skill.credentials}
        </Typography>
        </Box>
        <Button onClick={handleOpen} size="small" variant="contained">Edit</Button>
        <Modal
                justifyContent="space-between"
                direction="column"
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{ ...style, width: 400 }}>
              {descripCard}
                </Box>   
            </Modal>
        <Button size="small" onClick={handleDeleteButton} id={skill.skill.id} color="error" variant="contained">Delete</Button>
         </CardContent>             
      </Box>
        </Stack>
  )
  return (
    <Stack direction="column">
            {infoCard}
        </Stack>
  )
}

export default MySkillInfoCard