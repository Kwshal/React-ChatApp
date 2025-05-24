import Button from "../components/Button";


// props to be passed to the component
let UserList = ({ openChat, open }) => {
     let users = [
          { name: "Aser1", uid: 1 },
          { name: "User2", uid: 2 },
          { name: "hser3", uid: 3 },
          { name: "hser4", uid: 4 },
          { name: "User5", uid: 5 },
          { name: "Lser6", uid: 6 },
          { name: "Lser7", uid: 7 },
          { name: "Lser8", uid: 8 },
          { name: "User9", uid: 9 },
          { name: "User10", uid: 10 },
          { name: "pser11", uid: 11 },
          { name: "pser12", uid: 12 },
          { name: "User13", uid: 13 },
          { name: "Use14", uid: 14 },
          { name: "Use15", uid: 15 },
          { name: "aser16", uid: 16 },
          { name: "aser17", uid: 17 },
          { name: "aser18", uid: 18 },
          { name: "User19", uid: 19 },
          { name: "User20", uid: 20 },
          { name: "User21", uid: 21 },
          { name: "User22", uid: 22 },
          { name: "User23", uid: 23 },
          { name: "User24", uid: 24 },
          { name: "User25", uid: 25 }
     ];
     return (
          <div className="user-list-container">
               {/* <h2 className="user-list-header">Contacts</h2> */}
               <ul className="user-list-ul">
                    <li className="girst">
                         <h2>
                              User Lists
                         </h2>
                         <Button id="bergurMenu" type="button" btnText="&#9776;" btnFunction={open} />
                    </li>
                    {users.map((user) => (
                         <li key={user.uid} onClick={openChat}><span className="avatar">{user.name[0]}</span><span className="name">{user.name}</span></li>
                    ))}
               </ul>
          </div>
     )
}

export default UserList