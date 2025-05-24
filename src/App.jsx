import { useState } from 'react'
import './App.css'
import AuthPage from './auth-components/Auth.jsx'
import ChatPage from './chat-components/ChatPage.jsx'

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="App">
      <div>
        {!entered && <AuthPage entered={() => setEntered(true)} />}
        {entered && <ChatPage logOut={() => setEntered(false)} />}
        {/* <ChatPage logOut={() => setEntered(false)} /> */}
      </div>
    </div>
  )
}

export default App
