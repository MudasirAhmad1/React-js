import React, { useState } from 'react'

function Clock({val}) {
    const [data,setdata]=useState(" ");
    // const [val,setval]=useState('green')
    // let color=(event)=>{
    //     setval(event.target.value);
    // }
    setInterval(() => {
        setdata(new Date().toLocaleTimeString()) // get the current time AFTER the delay
        // console.log(date.toLocaleTimeString());
    }, 1000);
  return (
    <>
    <h1 style={{ background: val, width: '400px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Clock: {data}
      </h1>
      {/* <select value={val} onChange={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>   
        <option value="blue">Blue</option>
      </select> */}
    </>
  )
}
export default Clock