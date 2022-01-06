import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginSignupPage from './LoginSignupPage';
import HomePage from './HomePage'
import ListPage from './ListPage'
import ItemPage from './ItemPage'
import { useState, useEffect } from 'react'

function App() {
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [signupAnchorEl, setSignupAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
      }
    })
  }, [])

  console.log(user)
  
  function handleLoginClick(event){
    setLoginAnchorEl(event.currentTarget)
    console.log('Login')
}

function handleSignupClick(event){
    setSignupAnchorEl(event.currentTarget)
    console.log('Signup')
}

// if (user) return <HomePage setUser= {setUser}/>;

  return (
    <div className="App">
      <Routes>
      <Route path='/lists/:id' element={<ListPage/>}/>
      <Route path='/items/:id' element={<ItemPage/>}/>
      <Route path='/home' element={<HomePage setUser= {setUser}/>}/>
      <Route path='/' element={<LoginSignupPage handleSignupClick={handleSignupClick} handleLoginClick={handleLoginClick}  setLoginAnchorEl={setLoginAnchorEl} setSignupAnchorEl={setSignupAnchorEl} loginAnchorEl={loginAnchorEl} signupAnchorEl={signupAnchorEl} setUser={setUser} /> }/>
      </Routes>
      </div>
  );
}

export default App;
