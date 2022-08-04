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


function UserSkillsAppBAr({user, skills, selectedSkill, handleSelectedSkill}) {

    const[inMySelect, setInMySelect] = useState("")
    // const[inAddSelect, setInAddSelect] = useState("")
    
   
    

    const handleMySkillsChange = (event) => {
      setInMySelect(event.target.value);
    
      };
    
     
    // const handleSkillsChange = (event) => {
    //     setInAddSelect(event.target.value);
    // };

    const showSelectedSkill = () => {
      // setSelectedSkill(event)
      handleSelectedSkill(inMySelect);
      
       
    }
    

    return(
        <>
        <AppBar position="static">
        <Stack justifyContent="space-between" direction="row">
        <Stack justifyContent="space-between" direction="row">
        <FormControl sx={{ m: 1, minWidth: 150, width: 150}} size="small">
        <InputLabel id="demo-simple-select-label">My Skills
        </InputLabel>
        <Select
          labelId="demo-simple--label"
          id="demo-simple-select"
          value={inMySelect}
          label="MySkills"
          onChange={handleMySkillsChange}
        >
        {user.skills.map((skill) => <MenuItem onClick={showSelectedSkill} value={skill} >{`${skill.name}`}</MenuItem>)}
        </Select>            
            </FormControl>
            </Stack>
            {/* <Stack justifyContent="space-between" direction="row">
              <FormControl sx={{ m: 1, minWidth: 110, width: 110 }} size="small">
        <InputLabel id="demo-simple-select-label">Add Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inAddSelect}
          label="SkillsList"
          onChange={handleSkillsChange}
        >
            {skills.map((skill) =>  <MenuItem value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
           </Stack> */}
            </Stack>
        </AppBar>
        </>
    )
}

export default UserSkillsAppBAr