import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Access/LoginPage'
import SignUpPage from './Pages/Access/SignUpPage'
import { useState, useEffect, useRef } from 'react';
import BottomNavBar from './Components/BottomNavBar'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { blueGrey} from '@mui/material/colors'
import SettingsPage from './Pages/SettingsPage/SettingsPage'
import MessagesPage from './Pages/MessagesPage/MessagesPage'
import SearchPage from './Pages/SearchPage/SearchPage';
import UserSkillPage from './Pages/SettingsPage/UserSkillPage'
import UserInfoPage from './Pages/SettingsPage/UserInfoPage';
import SkillsToLevelUpPage from './Pages/SettingsPage/SkillsToLevelUpPage'
import Conversation from './Components/MessagesPage/Conversation';
import { useNavigate } from 'react-router-dom';
import { Email } from './Components/SearchPage/Email';
import { integerPropType } from '@mui/utils';



function App() {
  
  const ref = useRef()

  const [user, setUser] = useState(null)
  const [skills, setSkills] = useState([])
  const [selectedSkill, setSelectedSkill] = useState({})
  const [selectedUser, setSelectedUser] = useState(null)
  const [conversations, setConversations] = useState(null)
  const [conversation, setConversation] = useState(null)
  const [userSkills, setUserSkills] = useState([])

  console.log(userSkills)

  const navigate = useNavigate()

  const handleSelectedSkill = (selected) => {
    setSelectedSkill(() => (selected))
  }
 
  const handleSelectedUser = (selected) =>{
    setSelectedUser(() => (selected))

  }

  const handleSelectedConvo =(selected) => {
    setConversation(() => (selected))
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
    fetch("/conversations")
     .then((r) => r.json())
     .then((data) => {
        setConversations(data);
     });
}, [user]);

const handleCreateConversation = (id) => {
  console.log(id)
  fetch("/conversations", {
     method: "POST",
     headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify({sender_id: user.id, receiver_id: id})
  }).then((r) => r.json()
  .then((conversation) => {
     setConversations([...conversations, conversation])
     navigate(`/messagesPage/${conversation.id}`)
  }));
}


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
          setUserSkills(user.skills)
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
    <div className="App" >      
       <ThemeProvider theme={theme}>
      <Routes> 
        <Route path="/homePage" 
        element={<HomePage 
        user={user} 
        onLogOut={setUser}/>}/>

        <Route path="/email" element={<Email user={user} selectedUser={selectedUser} />}/>

        <Route path="/searchPage" 
        element={<SearchPage 
        user={user}
        selectedUser={selectedUser}
        handleSelectedUser={handleSelectedUser}
        skills={skills}
        selectedSkill={selectedSkill}
        handleFindUsers={handleFindUsers}
        handleCreateConversation={handleCreateConversation}
        handleSelectedSkill={handleSelectedSkill}
        onLogOut={setUser}/>}/>

        <Route path="/messagesPage" 
        element={<MessagesPage 
        handleSelectedUser={handleSelectedUser}  
        conversations={conversations}
        handleSelectedConvo={handleSelectedConvo}
        selectedUser={selectedUser}
        user={user} 
        onLogOut={setUser}/>}/>

     

        <Route path="/messagesPage/:id" 
        element={<Conversation 
        user={user}
        conversation={conversation} 
        selectedUser={selectedUser} 
        handleSelectedUser={handleSelectedUser} 
        conversations={conversations}/>} />

        <Route path="/settingsPage" 
        element={<SettingsPage
        skills={skills} 
        user={user}  
        onLogOut={setUser}/>}/>

        <Route path="/userSkillPage" 
        element={<UserSkillPage 
        userSkills={userSkills}
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
