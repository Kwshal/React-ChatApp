import { useState } from "react"
import Sidebar from "./Sidebar"
import UserList from "./UserList"
import ChatWindow from "./ChatWindow"
// import ChatHeader from "./ChatHeader"

function ChatPage({ logOut }) {
     const [isOpen, setIsOpen] = useState(false);
     const [user, setUser] = useState(null);

     const toggleSidebar = () => {
          setIsOpen(!isOpen)
     }
     const openChat = (e) => {
          if (e.target.tagName === "LI") {
               setUser(e.target.querySelector(".name").innerText);
          } else {
               // If the click is on the avatar or name span, get the parent LI
               setUser(e.target.parentElement.querySelector(".name").innerText);
          }
     }
          
     return (
          <div className="chat-page">
               {isOpen && <Sidebar logOut={logOut} close={toggleSidebar} />}
               {!user && <UserList open={toggleSidebar} openChat={openChat} />}
               {user && <ChatWindow user={user} back={() => setUser(null)} />}  
          </div>
     )
}

export default ChatPage