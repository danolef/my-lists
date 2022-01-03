import './App.css';
import LoginSignupPage from './LoginSignupPage';

function App() {

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <LoginSignupPage/>
    </div>
  );
}

export default App;
