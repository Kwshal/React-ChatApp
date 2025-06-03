import { useState } from "react";
import Button from "../components/Button"
import { writeUserData } from "../db";

let ChatWindow = ({ user, back }) => {
     
     const [messages, setMessages] = useState([
          "These are some",
          "Sample",
          "Texts",
          "Message 4",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum praesentium quo quasi a suscipit exercitationem necessitatibus quas ipsam beatae culpa? Amet sapiente, deleniti laborum repellendus soluta tenetur iure velit mollitia!"
     ]);
     const [inputValue, setInputValue] = useState("");

     const sendText = () => {
          if (inputValue.trim() !== "") {
               setMessages([...messages, inputValue]);
               setInputValue("");
          }
     }

     return (
          <div className="chat-window">
               <div className="chat-window-header">
                    <Button id="back" type="button" btnText="&#8249; back" btnFunction={back} />
                    <h1 className="name">{user}</h1>
                    <Button id="options" type="button" btnText="&#8942;" />
                    <hr />
               </div>
               <div className="chat-window-content">
                    <div className="chat-window-messages">
                         {messages.map((msg, idx) => (
                              <p className="message reply" key={idx}>{msg}</p>
                         ))}
                    </div>
               </div>
               <div className="chat-window-input">
                    <input
                         type="text"
                         placeholder="Type a message..."
                         value={inputValue}
                         onChange={e => setInputValue(e.target.value)}
                         onKeyDown={e => { if (e.key === "Enter") sendText(); }}
                    />
                    <Button id="send" type="button" btnText="Send" btnFunction={sendText} />
               </div>
          </div>
     )
}

export default ChatWindow