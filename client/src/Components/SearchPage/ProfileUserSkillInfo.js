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



function ProfileUserSkillInfo({user_skill}) {
    const userSkillInfo = (
        
        <>
        <Stack direction="column">
        <Box sx={{ padding: ".1vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <CardContent style={{ justifyContent: 'center' }}> 
                <Typography variant="h7" sx={{fontSize: 15}} component="div">
                        {user_skill.skill_name}
                </Typography>              
                </CardContent> 
        </Box>
        </Stack>
        </>
            )

  return (
    <Stack justifyContent="space-between" direction="column">
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Stack>
            <Card>{userSkillInfo}</Card>
        </Stack>
        </Box>
    </Stack>
  )
}

export default ProfileUserSkillInfo