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




function Details({teaching_skill}) {

    const [open, setOpen] = useState(false);
    const [skillDescription, setSkillDescription] = useState(null)
    const [skillCredentials, setskillCredentials] = useState(null)
    const handleOpen = () => {
      setSkillDescription(teaching_skill.description)
      setskillCredentials(teaching_skill.credentials)
      setOpen(true);
    };
    const handleClose = () => {
        setSkillDescription(null)
        setskillCredentials(null)
        setOpen(false);
    };
//    console.log(skillDescription)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 10,
        px: 10,
        pb: 10,
    };

    const description = (
        <>
<Stack direction="column">
<Box sx={{ padding: ".1vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
<CardContent style={{ justifyContent: 'center' }}> 
<Box sx={{ padding: ".5vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
<Typography align="center" variant="h1" sx={{fontSize: 24}} component="div">
               {teaching_skill.skill_name}
        </Typography> 
<Typography align="center" variant="h4" sx={{fontSize: 20}} component="div">
               Description
        </Typography> 
        </Box>
        <Box sx={{ padding: ".5vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
        <Typography align="center" variant="h6" sx={{fontSize: 14}} component="div">
              
              {skillDescription ? skillDescription : null}
        </Typography> 
        </Box>                                 
        </CardContent>         
</Box>
</Stack>
</>

    )

    const credentials = (
        <>
<Stack direction="column">
<Box sx={{ padding: ".1vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
<CardContent style={{ justifyContent: 'center' }}> 
<Box sx={{ padding: ".5vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
<Typography align="center" variant="h4" sx={{fontSize: 20}} component="div">
               Credentials
        </Typography> 
        </Box>
        <Box sx={{ padding: ".5vh", minWidth: 275, width: 100, justifyContent: "center", alignItems: "center" }}>
        <Typography align="center" variant="h6" sx={{fontSize: 14}} component="div">
              
              {skillCredentials ? skillCredentials : null}
        </Typography> 
        </Box>                                 
        </CardContent>         
</Box>
</Stack>
</>

    )

    return (
      <>
      <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
       <Stack > <Button color="secondary" onClick={handleOpen}>Details</Button></Stack>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 250}}>
          {description}
          {credentials}
            <Button onClick={handleClose}>Back</Button>
          </Box>
        </Modal>
        </Box>
      </>
    );
  }
  
  export default Details