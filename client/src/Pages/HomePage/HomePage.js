import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function HomePage({onLogOut, user}) {

    const navigate = useNavigate()

   
  return (
    <>
        <Stack>
          <h1>Welcome to LEVEL UP!</h1>
   
  
  
        </Stack>
    </>
  )
}

export default HomePage