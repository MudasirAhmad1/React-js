import React from 'react'
import { useState } from 'react';

function Input() {
    const [count, setCount] = useState("Muzamil")
  return (
    <>
     <h1>Hello World</h1>
     <h2 onChange={(event)=>{
      console.log(event.target.value);
      setCount(event.target.value);
     }}><input type="text" value={count} placeholder="Enter your name" />{count}</h2>
     <button onClick={()=>{
      setCount("");
     }}>Clear</button>
    </>
  )
}

export default Input