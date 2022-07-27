import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import UploadImage from '../../Components/SettingsPage/UploadImage'
import UserSkillsSettings from '../../Components/SettingsPage/UserSkillsSettings'
import EditUserInfo from '../../Components/SettingsPage/EditUserInfo';
import EditSkillsSearching from '../../Components/SettingsPage/EditSkillsSearching'




function SettingsPage({ onLogOut, user}) {

    const navigate = useNavigate()
    const [file, setFile] = useState("")
   

    const imageCard = (
        <>
            <CardContent>
                <CardMedia
                    component="img"
                    height="300"
                    image={user.profile_image}
                    alt="Profile Pic"
                />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <UploadImage />
            </CardActions>
        </>
    );
    

    const skillsCard = (
        <>
        {/* <CardContent 
        sx={{ 
            margin: "auto", 
            alignItems: "center", 
            justifyContent: 'center', 
            padding: ".2vh",
            paddingBottom: ".2vh"
            }}>   */}
              
            <CardActions direction ="column" style={{ justifyContent: 'center' }}>        
              <UserSkillsSettings user={user}/>
        </CardActions>  
        {/* </CardContent> */}
        </>
    )

    const skillsToLevel = (
        <>
        <CardActions style={{ justifyContent: 'center' }}>        
             <EditSkillsSearching user={user} on/>
        </CardActions>
        </>
    )

    const userSettings = (
        <>
         <CardActions style={{ justifyContent: 'center' }}>        
             <EditUserInfo user={user} on/>
        </CardActions>
        </>
    )

    const handleLogOut = () => {
        fetch('/logout', {
            method: "DELETE",
        })
        onLogOut(null)
        navigate('/')
    }


    return (
        <>
            <Stack justifyContent="space-between" direction="column">
            <Stack>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{imageCard}</Card>
                </Box>
            </Stack >
            <Stack direction="column">
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                   <Card variant="outlined">{skillsCard}</Card>
                </Box>
            </Stack>
            <Stack>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                   <Card variant="outlined">{skillsToLevel}</Card>
                </Box>
            </Stack>
            <Stack>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                   <Card variant="outlined">{userSettings}</Card>
                </Box>
            </Stack>
            <Stack>
                <Button onClick={handleLogOut}>Log Out</Button>
            </Stack>
            </Stack>
        </>
    )
}

export default SettingsPage