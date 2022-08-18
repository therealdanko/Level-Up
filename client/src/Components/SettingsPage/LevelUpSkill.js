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


function LevelUpSkill({skill}){

console.log(skill)
    const levelUpCard = (
        <Stack direction="column">
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {skill.skill_name}
        </Typography>  
         </CardContent>             
            <CardActions style={{ justifyContent: 'center' }}>
             <Button  color="error" size="small" variant="contained">Drop This Skill</Button>
             </CardActions>
      </Box>
        </Stack>
    )


    return(

        <>
          <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{levelUpCard}</Card>
                </Box>
        </>
    )
}

export default LevelUpSkill;