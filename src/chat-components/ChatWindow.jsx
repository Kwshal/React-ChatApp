import Button from "../components/Button"

let ChatWindow = ({ user, back }) => {

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
                         <p className="message">These are some</p>
                         <p className="message">Sample</p>
                         <p className="message">Texts</p>
                         <p className="message">Message 4</p>
                         <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum praesentium quo quasi a suscipit exercitationem necessitatibus quas ipsam beatae culpa? Amet sapiente, deleniti laborum repellendus soluta tenetur iure velit mollitia!</p>
                    </div>
                    <div className="chat-window-input">
                         <input type="text" placeholder="Type a message..." />
                         <Button id="send" type="button" btnText="Send" />
                    </div>
               </div>
          </div>
     )
}

export default ChatWindow