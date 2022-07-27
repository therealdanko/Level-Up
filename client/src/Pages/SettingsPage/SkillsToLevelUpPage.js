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

function SkillsToLevelUpPage({user}) {

    const navigate = useNavigate()

const handleBackButton = (e) => {
    navigate('/settingsPage')
}

    return(
        <>
       
        <Button onClick={handleBackButton}>Back</Button>
        </>
    )
}

export default SkillsToLevelUpPage