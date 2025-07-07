import React, { useState } from 'react'

function Toggle() {
    const [display,setdisplay]=useState(false);
    const [count,setcount]=useState(3);
    let change=()=>{
        setcount(count+1);
    }
  return (
    <div>
        <h1>
            
            <button onClick={()=>{
                setdisplay(!display);
            }}> Click to Hide</button>
            {
                display?<h1>Mudasir</h1>:null
            }

        </h1>
        <h1>{count}</h1>
        {
            count==0?<h1>Muzamil</h1>
            :count==1?<h1>Mudasir</h1>
            :count==2?<h1>Mudassir</h1>
            :count==3?<h1>Mudasir</h1>
            :count==4?<h1>Mudasir</h1>
            :count==5?<h1>Mudasir</h1>
            :count==6?<h1>Mudasir</h1>
            :count==7?<h1>Mudasir</h1>
            :count==8?<h1>Mudasir</h1>
            :<h1>End of the game</h1>
        }
        <button onClick={change}>CLick Change count: {count}</button>
    </div>
  )
}

export default Toggle