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

function SearchAppBar({user}) {

    const [skillLeveling, setSkillLeveling] = useState('');
    const [mySkill, setMySkill] = useState('')
    const [skillsList, setSkillsList] = useState([])
    const [userSkills, setUserSkills] = useState([])

    const userSkillList = () =>{
        const mySkills = user.skills
       
        setUserSkills(mySkills)
        console.log(mySkills)
       
    }


  

    useEffect(() => {
        fetch('/skills').then((resp) => {
          if (resp.ok) {
            resp.json().then((skillsList) => {
                setSkillsList(skillsList)
                userSkillList()
            })            
            
          }
        })
      },[])


    const handleLookingChange = (event) => {
        setSkillLeveling(event.target.value);
      };
      
    const handleMySkillChange = (event) => {
        setMySkill(event.target.value);
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
          value={skillLeveling}
          label="Age"
          onChange={handleLookingChange}
        >
            {skillsList.map((skill) =>  <MenuItem value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
              <FormControl sx={{ m: 1, minWidth: 110, width: 110 }} size="small">
        <InputLabel id="demo-simple-select-label">My Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mySkill}
          label="Age"
          onChange={handleMySkillChange}
        >
            {userSkills.map((skill) =>  <MenuItem value={skill}>{`${skill.name}`}</MenuItem>)}
         
        </Select>
      </FormControl>
      </Stack>
</Stack>
              </AppBar>
        </>
    )
}
export default SearchAppBar;