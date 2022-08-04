import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffect} from 'react'
import { convertLength } from '@mui/material/styles/cssUtils';

function SearchAppBar({user, skills, handleSelectedSkill, handleClick, selectedSkill}) {

   

    const handleLookingChange = (event) => {
        
      handleSelectedSkill(event.target.value)

         console.log(event.target.value)
        
      };
      
  
    

    return(
        <>
              <AppBar position="static">
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
      {/* <Stack justifyContent="space-between" direction="row">
              <FormControl sx={{ m: 1, minWidth: 110, width: 110 }} size="small">
        <InputLabel id="demo-simple-select-label">My Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mySkill}
          label="MySkill"
          onChange={handleMySkillChange}
        >
            {user.skills.map((skill) =>  <MenuItem value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
      </Stack> */}
</Stack>
              </AppBar>
        </>
    )
}
export default SearchAppBar;