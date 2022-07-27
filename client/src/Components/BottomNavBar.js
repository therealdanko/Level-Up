import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'
// import {useState, useEffect} from 'react';
import Tooltip from '@mui/material/Tooltip';


function BottomNavBar(){

   

  
    

    return(
    <>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Stack justifyContent="space-between" direction="row">
        <IconButton
                sx={{margin:"auto" }}>
                <Tooltip title="homePage">
                <Link to='/homePage'
                >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*X1WW1SN-tvZmVRp0zpMXEA.png"
                  width={`${45}x`} 
                  height={`auto`} 
                  alt=""
                   />            
                  </Link>
                  </Tooltip>
                  </IconButton>
        <IconButton
                sx={{margin:"auto" }}>
                <Tooltip title="SearchPage">
                <Link to='/searchPage'
                >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*_6hJycKsQF-uEKt1R2KHdw.png"
                  width={`${55}x`} 
                  height={`auto`} 
                  alt=""
                   />            
                  </Link>
                  </Tooltip>
                  </IconButton>
                  <IconButton
                sx={{margin:"auto" }}>
                <Tooltip title="messagesPage">
                <Link to='/messagesPage'
                >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*I0q__g2mt3EI7BGf8u9WXg.png"
                  width={`${45}x`} 
                  height={`auto`} 
                  alt=""
                   />            
                  </Link>
                  </Tooltip>
                  </IconButton>
                  <IconButton
                sx={{margin:"auto" }}>
                <Tooltip title="settingsPage">
                <Link to='/settingsPage'
                >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*EqnhMSxI_g6I9_M7U4WV0Q.png"
                  width={`${50}x`} 
                  height={`auto`} 
                  alt=""
                   />            
                  </Link>
                  </Tooltip>
                  </IconButton>
               </Stack>
        </AppBar>
    </>
    )
}

export default BottomNavBar