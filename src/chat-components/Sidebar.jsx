import { useState } from "react"
import UserList from "./UserList"
import Button from "../components/Button"

let Sidebar = ({ logOut, close }) => {
     return (
          <div className="Sidebar">
               <Button id="close" type="button" btnText="&#10006;" btnFunction={close} />
               {/* <div className="door"><span className="knob"></span></div> */}
               <Button id="logOutButton" type="button" btnText="Log Out" btnFunction={logOut} />
          </div>
     )
}

export default Sidebar