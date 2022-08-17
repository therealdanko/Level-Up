import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { convertLength } from '@mui/material/styles/cssUtils';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';


function AddSkillAppBar({skills, selectedSkill, handleSelectedSkill}) {

    const handleAddChange = (event) => {
        
        handleSelectedSkill(event.target.value)
  
           console.log(event.target.value)
          
        };

  return (
    <AppBar position="static">
        <Stack justifyContent="space-between" direction="row">
        <FormControl  sx={{ m: 1, minWidth: 110, width: 110}} size="small">
        <InputLabel id="demo-simple-select-label">Skills</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSkill}
          label="AddSkill"
          onChange={handleAddChange}
        >
            {skills.map((skill) =>  <MenuItem  value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
        </FormControl>
        </Stack>
    </AppBar>
  )
}

export default AddSkillAppBar



{/* <AppBar  position="static">
    <Stack justifyContent="space-between" direction="row">
                <Stack justifyContent="space-between" direction="row">
              <FormControl sx={{ m: 1, minWidth: 110, width: 110}} size="small">
        <InputLabel id="demo-simple-select-label">Level Up</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSkill}
          label="SkillLeveling"
          onChange={handleLookingChange}
        >
            {skills.map((skill) =>  <MenuItem onClick={handleClick} value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
      </Stack>
      </AppBar> */}
