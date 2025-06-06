import { useState } from "react"
import Button from "../components/Button"

let Sidebar = ({ logOut, close }) => {
     const user = localStorage.getItem("user") || "Guest";
     return (
          <div className="Sidebar">
               <div className="sidebar-main">
                    <span className="avatar"> {user.charAt(0).toUpperCase()} </span>
                    <p>{user}</p>

                    
                    <Button id="close" type="button" btnText="&#10006;" btnFunction={close} />
                    {/* <div className="door"><span className="knob"></span></div> */}
                    <Button id="logOutButton" type="button" btnText="Log Out" btnFunction={logOut} />
               </div>
          </div>
     )
}

export default Sidebar