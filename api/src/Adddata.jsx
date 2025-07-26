import React, { useState } from 'react'

function Adddata() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [age,setage]=useState('')
    const [loading,setloading]=useState(false)
    const [data,setdata]=useState()
    

    async function createuser() {
        let url="http://localhost:3000/users";
        let response= await fetch(url,{
            method:'POST',
            body:JSON.stringify({name,email,age})
        });
        response=await response.json();
        setdata(response);
        // console.log(response);
        console.log(data.name);
        

        console.log(name,email,age);
        console.log(data);
        
    }
    
  return (
    <div style={{textAlign:'center'}}>
        <div>
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
        <button onClick={createuser}>Submit</button>
        </div>

        {/* {
          data.map((item,index)=>(
            <ul key={index} style={{display:'flex',justifyContent:'space-between', border:'1px solid black', padding:'30px', listStyle:'none' }}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.age}</li>
            </ul>
          ))  
        } */}
    </div>
  )
}

export default Adddata