import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Axios from 'axios'

function UploadImage({user,  handleUserImage} ) {

    const [file, setFile] = useState("")
    const imageRef = useRef()
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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

  

  const handeImageSubmit = (e) =>{
    e.preventDefault();
    // setIsLoading(true)
    const data = new FormData();
    console.log("yoo")
    console.log(file)
   data.append("file", file)
   data.append("upload_preset", "fejnxdld")
   console.log(data)
    Axios.post("https://api.cloudinary.com/v1_1/dxzmccchh/image/upload", 
   data)
    .catch(error => console.log(error))
    .then((res) => {
        
        console.log(res)
        // setIsLoading(false)
        if(res.status === 200){
            console.log("from if block")
        handleUserImage(res.data.secure_url)
        uploadToBackEnd(res.data.secure_url)
    } else {
        // setIsLoading(false)
        // alert("File error, try again or choose another file!")
        // imageRef.current.value=""
    }
    })
 

 }

 const uploadToBackEnd = (url) => {
    console.log("in backend")
    fetch('/me', {
        method: "PATCH",
        headers: {"Content-Type":"application/json"}, 
        body: JSON.stringify({
            profile_image: url         
    })
    })
    .then(r => r.json())
    .then(console.log)
    handleUserImage(url)
    setFile("")
 }



    return (
        <>
            <Button variant="contained"
                size="small" onClick={handleOpen}>Udpate Profile Image</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
      
                <Box sx={{ ...style, width: 400 }}>
                {/* <Box>
         {isLoading ? <p>Loading...</p> : null}
         </Box> */}
     {/* refactor to use MUI components and styling */}

                     <form ref={imageRef} onSubmit={handeImageSubmit}>
         
         <input type="file" onChange={(e) => setFile(e.target.files[0])}>
        </input>
    
        <input type="submit"></input> 
     
     </form> 
                    {/* <UploadForm/>                  */}
                </Box>
            </Modal>
        </>
    )
}

export default UploadImage