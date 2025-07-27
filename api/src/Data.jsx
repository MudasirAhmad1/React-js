import React, { useEffect, useState } from 'react'
import { data } from 'react-router';

function Data() {
    const [userdata,setdata]=useState([]);
    useEffect(()=>{
        apidata()
    },[])
     async function apidata() {
        const url="http://localhost:3000/users";
        let response= await fetch(url)
        response= await response.json();
        setdata(response);
        
        }

  return (
    <div>
        <h1>Api Data</h1> 
        {
          userdata.map((item,index)=>(
            <ul key={index} style={{display:'flex',justifyContent:'space-between', border:'1px solid black', padding:'30px', listStyle:'none' }}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.age}</li>
            </ul>
          ))  
        }
        
    </div>
  )
}

export default Data