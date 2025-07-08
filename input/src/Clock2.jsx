import React, { useState } from 'react'
import Clock from './Clock';

function Clock2() {
    const [val,setval]=useState('green')
    let color=(event)=>{
        setval(event.target.value);
    }
  return (
    <div>
      <select value={val} onChange={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>   
        <option value="blue">Blue</option>
      </select>
      <Clock val={val}/>
        </div>
  )
}

export default Clock2