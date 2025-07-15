import React, { useState } from 'react'
import Clock from './Clock';

function Clock2({date}) {
    const [color,setcolor]=useState();
    const change=(e)=>{
        setcolor(e.target.value);
        console.log(e.target.value);
        
    }
  return (
    <div>
        <h1>{color}</h1>
        <select onChange={change} name="" id="">
            <option value="green">Green</option>
            <option value="red">red</option>
        </select>
        <h1>{date}</h1>

        <Clock color={color}/>
    </div>
  )
}

export default Clock2