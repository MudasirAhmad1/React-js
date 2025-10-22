import React, { useState } from 'react'

function Useradd() {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [data,setdata]=useState();
    const [age,setage]=useState();
    const user={
        name,
        email,
        age,
    }
    const url="http://localhost:3000/users";
    const adduser=async ()=>{
        let response= await fetch(url,{
            method:'POST',
            body:JSON.stringify(user)
        }
        )
        response=await response.json();
        console.log(name,email,age);
        setdata(response); 
    }
    
    

  return (
    <div>
        <h1>Enter User Data</h1>
        <div style={{border: '2px solid black', width:'500px', textAlign:'center', fontWeight:'bolder'}}>
            <h3>Enter the Name:</h3>
            <input type="text" placeholder='Enter the Name:' onChange={(e)=>{setname(e.target.value)}} />
             <h3>Enter the Email:</h3>
            <input type="text" placeholder='Enter the Name:'  onChange={(e)=>{setemail(e.target.value)}} />
             <h3>Enter the Age:</h3>
            <input type="text" placeholder='Enter the Name:'  onChange={(e)=>{setage(e.target.value)}} />
            <h1><button onClick={adduser}>Submit</button></h1>

        </div>
    </div>
  )
}

export default Useradd