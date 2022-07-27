import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

function UploadImage() {

    const [file, setFile] = useState("")
    const [open, setOpen] = useState(false);
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
    const data = new FormData();
    console.log("yoo")
    console.log(file)
   data.append("file", file)
   data.append("upload_preset", "fejnxdld")
    fetch("/image", {
     method: "POST",
   })
    .then((res) => res.json())
  .then(console.log)

 }

//  function UploadForm(){

//     return(
//         <> 
//         <Box
//         onSubmit={handeImageSubmit}
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <input type="file" onChange={(e) => setFile(e.target.files[0])}>
// #           </input>
// #         <input type="submit"></input>
//         {/* <TextField id="outlined-basic"  label="Outlined" variant="outlined" /> */}
//       </Box>
//         </>
//     )
//  }



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
                     
     {/* refactor to use MUI components and styling */}

                     <form onSubmit={handeImageSubmit}>
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