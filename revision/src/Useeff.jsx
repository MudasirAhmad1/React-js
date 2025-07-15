import React, { useEffect, useState } from 'react'
import Grop from './Grop';

function Useeff() {
    const [counter,setcounter]=useState(1);
    const [data,setdata]=useState(1);
    const change=()=>{
    setcounter(counter+1); 
    }
    const change1=()=>{
    setdata(data+1); 
    }
    useEffect(()=>{
    mudi();
    },[data,counter])
    
     function mudi(){
        console.log("Mudi");
     }
     
  return (
    <div>
        <button onClick={change}>CLickme: {counter}</button>
        <br />
        <button onClick={change1}>CLickme: {data}</button>
        
    </div>
  )
}

export default Useeff