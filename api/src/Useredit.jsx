import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Useredit() {
      const [name,setname]=useState('')
      const [email,setemail]=useState('')
      const [age,setage]=useState('')
  const {id} =useParams();
  console.log(id);
  useEffect(()=>{
    handledata()
  },[])
  const navigate= useNavigate();
  async function handledata() {
    
    const url = "http://localhost:3000/users"
    // console.log(setname(response.name));
    let response = await fetch(`${url}/${id}`);
    response = await response.json();
    setname(response.name);
    setemail(response.age);
    setage(response.age);
    console.log(url);
  }
  async function userdata() {
    const url = "http://localhost:3000/users"
    // console.log(setname(response.name));
    let response = await fetch(`${url}/${id}`,{
      method:'Put',
      body:JSON.stringify({name,age,email})
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("Userdata");      
    }
    navigate("/data");
    
  }
  return (
    <div>
        <h2>User Page</h2>
      {/* <p>User ID: {2}</p> */}
        <h1>Enter the data for the User </h1>
        <input type="text"  placeholder='Enter the first name:' onChange={(e)=>{setname(e.target.value)}} />
        <br />
        <br />
        <input type="email" name="" id="" placeholder='Enter the Email:' onChange={(e)=>{setemail(e.target.value)}} />
        <br />
        <br />
        <input type="age" name="" id=""  placeholder='Enter the age:' onChange={(e)=>{setage(e.target.value)}} />
        <br />
        <br />
        <button onClick={userdata}>Submit</button>
    </div>
  )
}

export default Useredit