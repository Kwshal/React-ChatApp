import Button from "../components/Button"
import ChatHeader from "./ChatHeader"

function ChatPage({ logOut }) {
     return (
          <div className="chat-page">
               <ChatHeader logOut={logOut} />
               <div className="chat-container">
                    <div className="user-list">
                         <h2>Users</h2>
                         <ul>
                              {/* List of users will be displayed here */}
                              <li>User 1</li>
                              <li>User 2</li>
                              <li>User 3</li>
                         </ul>
                    </div>
               </div>
               <div className="chat-window">
                    <div className="messages">
                         {/* Messages will be displayed here */}
                    </div>
                    <input type="text" placeholder="Type a message..." />
                    <Button id="sendButton" type="button" btnText="Send" btnFunction={() => {}} />
                    <Button id="logOutButton" type="button" btnText="Log Out" btnFunction={() => {logOut}} />
               </div>
          </div>
     )
}

export default ChatPage