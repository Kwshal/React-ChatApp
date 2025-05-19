import Button from "../components/Button"

function ChatPage({ logOut }) {
     return (
          <div className="chat-page">
               <h1>Chat Page</h1>
               <p>This is the chat page.</p>
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