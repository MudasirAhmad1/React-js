import React, { useEffect, useState } from 'react'

function Userdata() {
  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    getuserdata()
  },[])
  async function getuserdata() {
    const url="https://dummyjson.com/users";
    // const url="http://localhost:3000/users";
    let response= await fetch(url);
    response=await response.json()
    setdata(response.users)
    console.log(response.users[0]);
    setloading(false); 
  }
  return (
    <div>App
      {
        !loading?
      data.map((item,index)=>(
        <ul key={index} style={{ border:'1px solid black',display:'flex', justifyContent:'space-around'}}>
        <li>Name: {item.firstName}</li>
        <li>Email: {item.email}</li>
        <li>Age: {item.age}</li>
        </ul>
      )) :<h1>Data loading</h1>
      }</div>
  )
}

export default Userdata