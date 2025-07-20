import React from 'react'
import { useState } from 'react'

function Input() {
    const [data,setdata]=useState()
    const [count,setcount]=useState();
    const [num,setnum]=useState({
      name:'Mudasir',
      age:24,
      email:"Mudasirahmad32@gmail.com"
    })

    const handle=()=>{
        setnum({...num,name:data});
    }
  return (
    <>
    <h1>Input the data</h1>
    <input type="text" placeholder='Enter the data:' onChange={(e)=>{
        setdata(e.target.value);
        
    }} />
    <br />
    <br />
    <button onClick={handle}>Click</button>
    <h1>Name:{num.name}</h1>
    <h1>Name:{num.age}</h1>
    <h1>Name:{num.email}</h1>
    
    <h1>Data: {count}</h1>
    </>
  )
}

export default Input