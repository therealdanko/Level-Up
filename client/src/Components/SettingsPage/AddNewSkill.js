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
import AddSkillAppBar from './AddSkillAppBar'

function AddNewSkill({
    skills,
handleSelectedSkill,
selectedSkill,
 handleClose,
 handleAddNewSkill
}) {



    const [description, setDescription] = useState("")
    const [credentials, setCredentials] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/teaching_skills", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skill_id: selectedSkill.id,
            description: description,
            credentials: credentials
          }),
        })
          .then((r) => r.json())
          .then((newUserSkill) => {
            handleAddNewSkill(newUserSkill)
          console.log(newUserSkill)
          }
          
          )
    } 

    

    console.log(description)
    console.log(credentials)

    const descripCard = (
        <>
       
        <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
         <form onSubmit={handleSubmit} id="addForm">
                <FormControl>
                    <Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
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
                    form="addForm"
                    onSubmit={handleSubmit}
                    onClick={handleClose}
                    >Add</Button>
        </Box>
        
        </>
    )

  return (

<>
<Stack justifyContent="space-between" direction="column">
<AddSkillAppBar 
handleSelectedSkill={handleSelectedSkill} 
selectedSkill={selectedSkill} 
skills={skills}/>
<Box sx={{ padding: "1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
<Stack justifyContent="space-between" direction="column">
    <Card>
        {descripCard}
    </Card>
</Stack>
</Box>
</Stack>
</>
    
  )
}

export default AddNewSkill