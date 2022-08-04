import React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import MySkillInfo from '../../Components/SettingsPage/MySkillInfo'
import UserSkillsAppBAr from '../../Components/SettingsPage/UserSkillsAppBar';



function UserSkillPage({user,  skills, handleSelectedSkill}) {

    const navigate = useNavigate()

    const handleBackButton = (e) => {
        navigate('/settingsPage')
    }

    
    let mySkills = user.skills
    let userSkillInfo = user.user_skills
    console.log(userSkillInfo)
    return (
        <>
         <Stack justifyContent="space-between" direction="row">
        {/* <UserSkillsAppBAr user={user}  skills={skills} selectedSkill={selectedSkill} handleSelectedSkill={handleSelectedSkill}/> */}
        
        </Stack> 
        <Stack>
           <MySkillInfo mySkills={mySkills} userSkillInfo={userSkillInfo} />
           
            </Stack> 
     
       <Button onClick={handleBackButton}>Back</Button>
        </>
)
}

export default UserSkillPage