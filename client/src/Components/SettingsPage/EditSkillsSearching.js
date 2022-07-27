import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

function EditSkillsSearching({user}) {

const navigate = useNavigate()



const handleSearchingSkills = (e) =>{
    navigate('/skillsToLevelUpPage')
}

    return(
        <>
         <Button onClick={handleSearchingSkills} variant="contained" size="small">Update Skills I Want To Level Up</Button>
        </>
    )
}

export default EditSkillsSearching