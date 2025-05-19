import { useState } from "react";
import StatusMessage from "./StatusMessage";
import Button from "../components/Button";


function SignupForm({ logIn, signUp }) {
     const [statusMessage, setStatusMessage] = useState("");
     let userList = [
          { username: "user1", password: "pass1" },
          { username: "user2", password: "pass2" },
          { username: "user3", password: "pass3" }
     ];

     const handleNewButtonClick = (e) => {
          e.preventDefault();
          const username = document.getElementById("username");
          const password = document.getElementById("password");
          const confirmPassword = document.getElementById("confirmPassword");

          if (username.value.trim() === "") {
               setStatusMessage("Please enter a username.");
          } else if (userList.some(user => user.username === username.value.trim())) {
               setStatusMessage("Username already exists.");
          } else if (password.value.trim() === "") {
               setStatusMessage("Please enter a password.");
          } else if (confirmPassword.value.trim() === "") {
               setStatusMessage("Please confirm your password.");
          } else if (password.value !== confirmPassword.value) {
               setStatusMessage("Passwords do not match.");
          } else {
               setStatusMessage("Welcome to ChatApp!");
               signUp();
          }
     }

     return (
          <form className="auth-form">
               <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    autoComplete="username"
               />
               <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="new-password"
               />
               <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
               />
               <StatusMessage status={statusMessage} />
               <div className="button-group">
                    <Button id="enterButton" btnText="Sign Up" type="submit" btnFunction={handleNewButtonClick} />
                    <Button id="newButton" btnText="Aleady have an account? Login" type="button" btnFunction={logIn} />
               </div>
          </form>
     );
}

export default SignupForm;