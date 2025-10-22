import React, { useEffect, useState } from 'react'

function Showdata() {
  useEffect(()=>{
    userdata()
  },[])
  const url="http://localhost:3000/users";
  const [data,setdata]=useState([]);
  const userdata= async ()=>{
    let response= await fetch(url);
    response= await response.json();
    console.log(response);
    setdata(response);
  }
  return (
    <div>Showdata
      {
        data.map((item,index)=>(
          <ul key={index}>
            <li>{item.name}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Showdata