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
import Modal from '@mui/material/Modal';



function Profile({objUser, selectedSkill}) {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const imageCard = (
        <>
         <Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="300"
                    image={objUser.profile_image}
                    alt="Profile Pic"
                />
            </CardContent>
            </Box>
        </>
    );

    const userInfo = (
<>
<Box sx={{ padding: ".5vh", minWidth: 275, justifyContent: "center", alignItems: "center" }}>
    
</Box>
</>

    )
    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };


  return (
    <Stack justifyContent="space-between" direction="column">
         <Button onClick={handleOpen} variant="contained" size="small">Profile</Button>
         <Modal
                justifyContent="space-between"
                direction="column"
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >             
             <Box sx={{ ...style, width: 400 }}>
                <Stack>
                <Card>{imageCard}</Card> 
                </Stack>
                <Stack>
                <Card> </Card>
                    </Stack>
                </Box>   
            </Modal>
    </Stack>
  )
}

export default Profile