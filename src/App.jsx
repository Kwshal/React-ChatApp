import { useEffect, useState } from 'react'
import './App.css'
import AuthPage from './auth-components/Auth.jsx'
import ChatPage from './chat-components/ChatPage.jsx'

function App() {
  const [entered, setEntered] = useState(false);

  function logOut() {
    setEntered(false);
    localStorage.removeItem('user'); // Clear user data from localStorage
  }

  return (
    <div className="App">
      <div>
        {!entered && <AuthPage entered={() => setEntered(true)} />}
        {entered && <ChatPage logOut={logOut} />}
        {/* <ChatPage logOut={() => setEntered(false)} /> */}
      </div>
    </div>
  )
}

export default App
