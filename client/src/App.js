import './App.css';
import LoginSignupPage from './LoginSignupPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import MenuHeader from './MenuHeader';
import { useState } from 'react'


function App() {

  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [signupAnchorEl, setSignupAnchorEl] = useState(null);

  function handleLoginClick(event){
    setLoginAnchorEl(event.currentTarget)
    console.log('Login')
}

function handleSignupClick(event){
    setSignupAnchorEl(event.currentTarget)
    console.log('Signup')
}

const handleLoginClose = () => {
  setLoginAnchorEl(null);
};

const handleSignupClose = () => {
  setSignupAnchorEl(null);
};



  return (
    <div className="App">
      <h1>My Lists</h1>
      <LoginSignupPage handleSignupClick={handleSignupClick} handleLoginClick={handleLoginClick}  />
      <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose}/>
      <SignupForm signupAnchorEl={signupAnchorEl} handleSignupClose={handleSignupClose}/>
      <MenuHeader/>
    </div>
  );
}

export default App;
