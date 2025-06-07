import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getAllUsers } from "../db";


// props to be passed to the component
let UserList = ({ openChat, open }) => {
     const [users, setUsers] = useState([]);

     useEffect(() => {
          getAllUsers()
               .then(data => {
                    // console.log("Fetched users data:", data);
                    if (data) {
                         // Convert object to array
                         const usersArray = Object.entries(data).map(([key, value]) => ({
                              key,
                              ...value
                         }));
                         setUsers(usersArray);
                    } else {
                         setUsers([]);
                    }
               })
               .catch(() => setUsers([]))
     }, []);

     return (
          <div className="user-list-container">
               {/* <h2 className="user-list-header">Contacts</h2> */}
               <span className="girst">
                    <h2 className="logo">
                         Chat-App
                         {/* <span className="user-count"> ({users.length})</span> */}
                    </h2>
                    {/* <h4>This is a chat app</h4> */}
                    <Button id="bergurMenu" type="button" btnText="&#9776;" btnFunction={open} />
               </span>
               <ul className="user-list-ul">
                    {users.map((user) => (
                         user.username !== localStorage.getItem("user") && <li key={user.key} onClick={openChat}><span className="avatar">{user.username ? user.username[0] : "?"}</span><span className="name">{user.username || user.key}</span></li>
                    ))}
               </ul>
          </div>
     )
}

export default UserList