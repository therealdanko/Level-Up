import * as React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MySkillInfo({mySkills, userSkillInfo}){

//   console.log(mySkills)
//     console.log(userSkillInfo)
//     myskills.map()


    const mySkillCardOne = (
        <Stack direction="column">
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {mySkills[0].name}
        </Typography>
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Description
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[2].description}
        </Typography>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Credentials
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[2].credentials}
        </Typography>
        </Box>
         </CardContent>             
      </Box>
        </Stack>
    )

    const mySkillCardTwo = (
        <Stack direction="column">
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {mySkills[1].name}
        </Typography>
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Description
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[0].description}
        </Typography>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Credentials
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[0].credentials}
        </Typography>
        </Box>
         </CardContent>             
      </Box>
        </Stack>
    )

    const mySkillCardThree = (
        <Stack direction="column">
            <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent style={{ justifyContent: 'center' }}> 
        <Typography variant="h7" sx={{fontSize: 25}} component="div">
                {mySkills[2].name}
        </Typography>
        <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Description
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[1].description}
        </Typography>
        <Typography  variant="h1" sx={{fontSize: 17}} component="div">
            Credentials
       </Typography> 
       <Typography  variant="h7" sx={{fontSize: 12}} component="div">
          {userSkillInfo[1].credentials}
        </Typography>
        </Box>
         </CardContent>             
      </Box>
        </Stack>
    )
    
    
    

   

    return(
        <>
       <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{mySkillCardOne}</Card>
                   
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{mySkillCardTwo}</Card>
                    
                </Box>
                <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
                    <Card variant="outlined">{mySkillCardThree}</Card>
                  
                </Box>
        </>
    )
}

export default MySkillInfo;