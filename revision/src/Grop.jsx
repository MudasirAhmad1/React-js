import React, { useEffect, useState } from 'react'

function Grop() {
    const [display,setdisplay]=useState(true);
    const change=()=>{
        setdisplay(!display);
        console.log("Change"); 
    }
    useEffect(()=>{
        return(()=>{
            console.log("Unmount");
        })
        
    },[display])
  return (
    <div>
        {
            display?<h1>Welcome to Useeffect </h1>:null
        }
        
        <button onClick={change}>Toggle</button>

    </div>
  )
}

export default Grop