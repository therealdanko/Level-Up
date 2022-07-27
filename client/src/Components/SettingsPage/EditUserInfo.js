import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function EditUserInfo(){

const navigate = useNavigate()
    
const handleUserEditButton = (e) => {
    navigate('/userInfoPage')
}

    return(
        <>
        <Button onClick={handleUserEditButton} variant="contained" size="small">Edit User Info</Button>
        </>
    
    )
}

export default EditUserInfo