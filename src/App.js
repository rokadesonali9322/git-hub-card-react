
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Compontes/Card';

function App() {
  const [userdata,setuserdata]=useState([]);
  useEffect(()=>{
    fetch("https://api.github.com/users")
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data);
    setuserdata(data);
    })
  },[]);
  return (
   <>
    <h1>Github User App</h1>
        <div className="card-conatiner">
        {userdata.map((user)=>{
      {/* console.log(user.login) */}
       return(
         <Card 
           userName={user.login}
           profilepic={user.avatar_url}
           profileurl={user.html_url}
         />
       )
        })
        }
       
        </div>
  </>
  );
}

export default App;
