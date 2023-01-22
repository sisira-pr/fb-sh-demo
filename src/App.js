import { useEffect, useState } from 'react';
import './App.css';
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from "@firebase/firestore"
import {db} from "./firebase-config"
import { async } from '@firebase/util';

function App() {
 
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users");

  const createUser = async ()=>{
    await addDoc(usersCollectionRef,{name:newName,age:Number(newAge)});
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db,"users",id);
    await updateDoc(userDoc,{age:age});
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);
  }

  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data( ), id: doc.id})));
      // console.log(users );
    };
    getUsers();
  },[users,usersCollectionRef])

  return (
    <div className="App">
      <input placeholder='Name..' onChange={(event)=>{setNewName(event.target.value)}}/>
      <input type="number" placeholder='Age..' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>

        {users.map((user)=>{
          return (
            <div>
              <h2>Name: {user.name}</h2>
              <h2>Age: {user.age}</h2>
              <button onClick={()=>{updateUser(user.id,user.age+1)}}>Increase Age</button>
              <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
