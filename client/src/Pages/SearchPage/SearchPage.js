import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import SearchAppBar from '../../Components/SearchPage/SeachAppBar';


function SearchPage({onLogOut, user,  users}){

    const navigate = useNavigate()

   

    return(
        <>
        <Stack justifyContent="space-between" direction="column"></Stack>
        <SearchAppBar user={user}/>
        <Stack>
 
        </Stack>
        <Stack>
    
        </Stack>
        <Stack/>
        </>
    )
}

export default SearchPage