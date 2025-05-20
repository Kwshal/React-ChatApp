
let ChatHeader = ({ logOut }) => {
     return (
          <div className="chat-header">
               <h1>Chat Header</h1>
               <p>This is the chat header.</p>
               <button id="logOutButton" type="button" onClick={logOut}>Log Out</button>
          </div>
     )
}

export default ChatHeader