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
import Details from './Details'




  


function UserSkill({teaching_skill}) {

   

    const userSkillCard = (
        <Stack>
          <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
       
          <Typography justifyContent="center" variant="h7" sx={{fontSize: 15}} component="div">
         {teaching_skill.skill_name} 
         <Details teaching_skill={teaching_skill}/>
          </Typography> 
         
                  </Box> 
        </Stack>
      )

     

  return (

    <Stack justifyContent="space-between" direction="column">
    <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Card size="small">{userSkillCard}</Card>
    </Box>
    </Stack>
  )
}

export default UserSkill