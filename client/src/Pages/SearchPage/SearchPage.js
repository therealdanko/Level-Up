import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import SearchAppBar from '../../Components/SearchPage/SearchAppBar';
import SearchUserCard from '../../Components/SearchPage/SearchUserCard'

function SearchPage({ 
    user, 
    handleFindUsers, 
    handleSelectedSkill, 
    skills, 
    selectedSkill
}){

    const navigate = useNavigate()


   
    
   const selectedUsers = selectedSkill.users
   console.log(selectedUsers)

    return(
        <>
        <Stack justifyContent="space-between" direction="column"></Stack>
        <SearchAppBar 
        handleSelectedSkill={handleSelectedSkill}
        searchSkill={selectedSkill} 
        skills={skills} 
        user={user}/>
        <Stack>
        {selectedUsers ? selectedUsers.map((objUser) => <SearchUserCard selectedSkill={selectedSkill} objUser={objUser}/>) : null}
        </Stack>
        <Stack/>
        </>
    )
}

export default SearchPage