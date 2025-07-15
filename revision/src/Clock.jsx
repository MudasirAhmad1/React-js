import React, { useState } from 'react'
import Clock2 from './Clock2';

function Clock({color}) {
    const [date,setdate]=useState();
   
    
    setInterval(()=>{
         setdate(new Date().toLocaleTimeString()); 
    },1000)
    
  return (
    <div style={{ backgroundColor:color, border: '1px solid black'}}>
        {date}
        
        </div>
  )
}

export default Clock