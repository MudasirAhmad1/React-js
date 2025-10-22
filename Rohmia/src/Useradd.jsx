import React, { useState } from 'react'

function Useradd() {
    const [data,setdata]=useState([]);
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [age,setage]=useState('');
    const user={
        name,
        email,
        age
    }
    const url="http://localhost:3000/users";
    const userdata=async ()=>{
        let response=await fetch(url,{
            method:'POST',
            body:JSON.stringify(user)
        })
        response=await response.json();
        setdata(response);
        //console.log(name,age,email);
        console.log("Welcome");
        
        
    }
  return (
    <div>Enter the Data
        
        <h3>
            <input type="text" placeholder='Enter the Name:' onChange={(e)=>{setname(e.target.value)}} />
        </h3>
        <h3>
            <input type="email" name="" id="" placeholder='Enter the Email:' onChange={(e)=>{setemail(e.target.value)}} />
        </h3>
        <h3>
            <input type="number" name="" id="" placeholder='Enter Age:' onChange={(e)=>{setage(e.target.value)}} />
        </h3>
        <button onClick={userdata}>Submit</button>
    </div>
  )
}

export default Useradd