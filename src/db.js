// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
//   db
import { getDatabase, ref, set, onValue, update, remove, push, child, get, } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
const firebaseConfig = {
     apiKey: "AIzaSyCSbf8wxFIFpHJGsNvl5MzQKVht6GqMHZ4",
     authDomain: "react-chatapp-38.firebaseapp.com",
     projectId: "react-chatapp-38",
     storageBucket: "react-chatapp-38.firebasestorage.app",
     messagingSenderId: "235234632686",
     appId: "1:235234632686:web:e5df834ac3985f452de4ff",
     measurementId: "G-NR0BE6JGEY",
     databaseURL: "https://react-chatapp-38-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

let getAllUsers = () => {
     return get(ref(db, 'users')).then((snapshot) => {
          if (snapshot.exists()) {
               // console.log("Users fetched:", snapshot.val());
               // console.log(typeof snapshot.val());
               return snapshot.val();
          } else {
               throw new Error("No data available");
          }
     });
}
// get certain user 
let getUser = (user) => {
    return get(ref(db, `users/${user}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null; // <--- Return null instead of throwing
        }
    });
}


// Function to write data to the database
function writeUserData(name, password) {
     // console.log("writeUserData called with name:", name, "and password:", password);
     const userRef = ref(db, 'users/' + name);
     // check ig the user already exists
     get(userRef).then((snapshot) => {
          if (snapshot.exists()) {
               alert("User already exists");
          } else {
               set(userRef, {
                    username: name,
                    password: password
               });
               alert("User created successfully");
          }
     });
}

// Function to read data from the database
function readUserData(userId) {
     return get(ref(db, `users/${userId}`)).then((snapshot) => {
               if (snapshot.exists()) {
                    return snapshot.val();
               } else {
                    throw new Error("No data available");
               }
          });
}

// Function to update user data
function updateUserData(userId, name, password) {
     const updates = {};
     updates[`/users/${userId}/username`] = name;
     updates[`/users/${userId}/password`] = password;
     return update(ref(db), updates);
}

// Function to delete user data
function deleteUserData(userId) {
     return remove(ref(db, 'users/' + userId));
}

// Function to listen for changes in user data
function listenForUserDataChanges(userId, callback) {
     const userRef = ref(db, 'users/' + userId);
     onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
               callback(snapshot.val());
          } else {
               callback(null);
          }
     });
}

// Export the functions for use in other parts of the application
export {
     writeUserData,
     readUserData,
     updateUserData,
     deleteUserData,
     listenForUserDataChanges,
     getAllUsers,
     getUser
};