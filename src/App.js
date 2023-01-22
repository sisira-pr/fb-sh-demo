import { useEffect, useState } from 'react';
import './App.css';
import {collection, getDocs} from "@firebase/firestore"
import {db} from "./firebase-config"

function App() {
 
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users");

  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data( ), id: doc.id})));
      console.log(users );
    };
    getUsers();
  },[users,usersCollectionRef])
  
  return (
    <div className="App">
        {users.map((user)=>{
          return (
            <div>
              <h2>Name: {user.name}</h2>
              <h2>Age: {user.age}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default App;
