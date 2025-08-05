import React, { useState } from 'react'

function Home() {
    const colors= JSON.parse(localStorage.getItem('color'))

    const [red,setred]=useState(colors && colors.red? colors.red:0);
    const [blue,setblue]=useState(colors && colors.blue? colors.blue:0);
    const [green,setgreen]=useState(colors && colors.green? colors.green:0);
    const colorsave=()=>{
        localStorage.setItem("color",JSON.stringify({red,blue,green}))
        
    }
  return (
    <div>
        <h1>
            Home
        </h1>
        <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: '100px', height: '100px', borderRadius:'15px'}}>
</div>
        <input type="range" name="" id="" min={0} max={255} onChange={(e)=>{
            console.log(e.target.value); 
            setred(e.target.value)
        }} />
        <br />
        <input type="range" name="" id="" min={0} max={255} onChange={(e)=>{
            console.log(e.target.value); 
            setgreen(e.target.value)
        }} />
        <br />
        <input type="range" name="" id="" min={0} max={255} onChange={(e)=>{
            console.log(e.target.value); 
            setblue(e.target.value)
        }} />
        <br />
        <button onClick={colorsave}>Save</button>
    </div>
  )
}

export default Home