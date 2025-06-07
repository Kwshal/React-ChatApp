import { useRef, useEffect } from "react"
import Button from "../components/Button"

let Sidebar = ({ logOut, close }) => {

     const user = localStorage.getItem("user") || "Guest";
     const sidebarRef = useRef(null);
     if (!document.documentElement.getAttribute("data-theme")) {
          document.documentElement.setAttribute("data-theme", "light");
     }

     function toggleTheme() {
          const root = document.documentElement;
          const current = root.getAttribute("data-theme");
          root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
     }

     useEffect(() => {
          const handleClick = (e) => {
               if (e.target === sidebarRef.current) {
                    close();
               }
          };
          const sidebarElem = sidebarRef.current;
          sidebarElem.addEventListener("click", handleClick);
          return () => {
               sidebarElem.removeEventListener("click", handleClick);
          };
     }, [close]);

     return (
          <div className="Sidebar" ref={sidebarRef}>
               <div className="sidebar-main">
                    <span className="avatar"> {user.charAt(0).toUpperCase()} </span>
                    <p>{user}</p>

                    <Button id="toggle-theme" type="button" btnText="Toggle Theme" btnFunction={toggleTheme} />
                    {/* <Button id="close" type="button" btnText="&#10006;" btnFunction={close} /> */}
                    {/* <div className="door"><span className="knob"></span></div> */}
                    <Button id="logOutButton" type="button" btnText="Log Out" btnFunction={logOut} />
               </div>
          </div>
     )
}

export default Sidebar