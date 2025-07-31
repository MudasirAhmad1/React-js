import React, { lazy, useState } from 'react'
import Project2 from './Project2'

const User=lazy(()=>import('./User'));

function Project() {
    const [load,setload]=useState(false)
  return (
    <div>
        <h1>Project one 
        </h1>
        <button onClick={()=>{
            setload(true)
        }}>Click to load</button>
        {
            load?<Project2/>:null
        }
        
    </div>
  )
}

export default Project