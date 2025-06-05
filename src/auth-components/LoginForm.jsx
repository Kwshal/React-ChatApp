import { useState, useEffect } from "react";
import StatusMessage from "./StatusMessage";
import Button from "../components/Button";
import { getUser } from "../db";

function LoginForm({ logIn, signUp }) {

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [user, setUser] = useState(null);
     const [statusMessage, setStatusMessage] = useState("");

     const handleUsernameInput = () => {
          const username = document.getElementById("username");
          setUsername(username.value);
          setStatusMessage("");
     };
     const handlePasswordInput = () => {
          const passwordInput = document.getElementById("password");
          setPassword(passwordInput.value);
          setStatusMessage("");
     };
     useEffect(() => {
          const username = document.getElementById("username");
          username.focus();
     }, []);

     useEffect(() => {
          username && getUser(username)
               .then(data => {
                         if (data) {
                              // console.log("Fetched user data:", data);
                              setUser(data);
                              // setStatusMessage("User found.");
                         } else {
                              // setUser(null);
                              // setStatusMessage("User not found.");
                         }
               })
               .catch(() => {
                    setUser(null);
                    setStatusMessage("Error fetching user data.");
               });
     }, [username]);

     // Mock user data
     // In a real application, this data would be fetched from a server
     let userList = [
          { username: "u", password: "p" },
          { username: "user2", password: "pass2" },
          { username: "user3", password: "pass3" }
     ];
     // let user = getUser();

     const handleEnterButtonClick = (e) => {
          e.preventDefault();
          if (username.trim() === "") {
               setStatusMessage("Please enter a username.");
          }
          else if (!user.username === username.trim()) {
               setStatusMessage("Username not found.");
          }
          else if (username.trim() === "" && password.trim() === "") {
               setStatusMessage("Please enter a username and password.");
          }
          else if (password.trim() === "") {
               setStatusMessage("Please enter a password.");
          }
          else if (user.username === username.trim()) {
               if (user.password === password.trim()) {
                    // setStatusMessage("Welcome to ChatApp!");
                    logIn(); //?
                    localStorage.setItem("user", username);
               } else {
                    setStatusMessage("Incorrect password.");
               }
          } else {
               setStatusMessage("");
          }

     };

     return (
          <form className="auth-form">
               <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameInput}
                    placeholder="Username"
                    required
               />
               <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder="Password"
                    required
               />

               {statusMessage && <StatusMessage status={statusMessage} />}

               <div className="button-group">
                    <Button
                         id={"enterButton"}
                         btnText="Enter ChatApp"
                         type="submit"
                         btnFunction={handleEnterButtonClick}
                    />
                    <Button
                         id={"newButton"}
                         btnText="New user? Sign Up"
                         type="button"
                         btnFunction={signUp}
                    />
               </div>
          </form>
     );
}
export default LoginForm;
