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
import LevelUpSkill from '../../Components/SettingsPage/LevelUpSkill';


function SkillsToLevelUpPage({user}) {

const navigate = useNavigate()

let levelUpSkills = user.level_up_skills

console.log(levelUpSkills)



const handleBackButton = (e) => {
    navigate('/settingsPage')
}

    return(
        <> 
   <Stack justifyContent="space-between" direction="column">
        {levelUpSkills.map((skill) => <LevelUpSkill skill={skill}/>)}
    <Stack>
        <Button onClick={handleBackButton}>Back</Button>
        </Stack>
        </Stack>
        </>
    )
}

export default SkillsToLevelUpPage