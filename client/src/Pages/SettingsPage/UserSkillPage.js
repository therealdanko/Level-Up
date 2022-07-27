import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function UserSkillPage({user}) {

    const navigate = useNavigate()

    const handleBackButton = (e) => {
        navigate('/settingsPage')
    }

    return (
        <>
        <h5>hello</h5>
        <Button onClick={handleBackButton}>Back</Button>
        </>
    )
}

export default UserSkillPage