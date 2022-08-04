import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Access/LoginPage'
import SignUpPage from './Pages/Access/SignUpPage'
import { useState, useEffect } from 'react';
import BottomNavBar from './Components/BottomNavBar'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { blueGrey} from '@mui/material/colors'
import SettingsPage from './Pages/SettingsPage/SettingsPage'
import MessagesPage from './Pages/MessagesPage/MessagesPage'
import SearchPage from './Pages/SearchPage/SearchPage';
import UserSkillPage from './Pages/SettingsPage/UserSkillPage'
import UserInfoPage from './Pages/SettingsPage/UserInfoPage';
import SkillsToLevelUpPage from './Pages/SettingsPage/SkillsToLevelUpPage'


function App() {

  // const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [skills, setSkills] = useState([])
  const [selectedSkill, setSelectedSkill] = useState({})

  const handleSelectedSkill = (selected) => {
    setSelectedSkill(() => (selected))
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[50],
      },
      secondary: {
        main: '#cfd8dc',
      }
    },
  })

  

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        })
      }
    })
  }, [])

  const handleFindUsers = (id) => {
    fetch(`/skills/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((skill) => {
          setSelectedSkill(skill)
          console.log(skill)
        })
        
      }
    })

  }
  
  
  useEffect(() => {
    fetch('/skills').then((resp) => {
      if (resp.ok) {
        resp.json().then((skillsList) => {
          setSkills(skillsList)
})            
        
      }
    })
  },[])

  // if(!selectedSkill) return null;
  
  if (!user) return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<LoginPage onLogin={setUser} />} />
        <Route path="/signup" element={<SignUpPage onSignUp={setUser} />} />
      </Routes>
      </ThemeProvider>
    </>)




  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <Routes> 
        <Route path="/homePage" 
        element={<HomePage 
        user={user} 
        onLogOut={setUser}/>}/>

        <Route path="/searchPage" 
        element={<SearchPage 
        user={user}
        // users={users}
        skills={skills}
        selectedSkill={selectedSkill}
        handleFindUsers={handleFindUsers}
        handleSelectedSkill={handleSelectedSkill}
        onLogOut={setUser}/>}/>

        <Route path="/messagesPage" 
        element={<MessagesPage 
        user={user} 
        onLogOut={setUser}/>}/>

        <Route path="/settingsPage" 
        element={<SettingsPage
        skills={skills} 
        user={user}  
        onLogOut={setUser}/>}/>

        <Route path="/userSkillPage" 
        element={<UserSkillPage 
        skills={skills} 
        user={user}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        handleSelectedSkill={handleSelectedSkill}      
        />}/>

        <Route path="/userInfoPage" 
        element={<UserInfoPage 
        user={user} 
        onDelete={setUser}         
        />}/>

        <Route path="/skillsToLevelUpPage" 
        element={<SkillsToLevelUpPage 
        user={user} 
        onDelete={setUser}         
        />}/>
        
      </Routes>
      <BottomNavBar user={user}/>
      </ThemeProvider>
    </div>
  );
}



export default App;
