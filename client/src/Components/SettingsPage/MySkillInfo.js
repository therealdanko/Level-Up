import * as React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MySkillInfoCard from "./MySkillInfoCard"

function MySkillInfo({ userSkills, handleUserSkills, handleSelectedSkill, selectedSkill}){

//  

    
    
    

   

    return(
        <>
       <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                   {userSkills.map((skill) => <MySkillInfoCard selectedSkill={selectedSkill} handleSelectedSkill={handleSelectedSkill} handleUserSkills={handleUserSkills} skill={skill} />)}
                   
                </Box>
            
        </>
    )
}

export default MySkillInfo;