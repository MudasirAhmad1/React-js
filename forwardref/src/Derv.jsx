import React, { useState } from 'react'

function Derv() {
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState('');    
    const handle=()=>{
        setUsers([...users,user])
    }
    console.log(users);

    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length;
    
  return (
    <div>
        <h1>Total : {total}</h1>
        <h1>Last : {last}</h1>
        <h1>unique:{unique}</h1>
        <input type="text" placeholder='Enter the text:' onChange={(e)=>{
            setUser(e.target.value);
        }} />
        <button onClick={handle}>CLick</button>
        {
            users.map((item,index)=>(
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))
        }

    </div>
  )
}

export default Derv