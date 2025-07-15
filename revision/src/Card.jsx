import React, { useState } from 'react'

function Card() {
    const [style,setstyle]=useState(
        {
        color:'red',
        border:'1px solid black',
        }
    );
    const changecolor=(color)=>{
        console.log(color);
        setstyle({...style,backgroundColor:color})
        
    }
    const changecolor1=(color)=>{
        console.log(color);
        setstyle({...style,backgroundColor:color})
        
    }
  return (
    <div>
        <h1 style={{backgroundColor:'green'}}>Card</h1>
        <div style={style}>
        <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="" />
        <h4>Mudasir Ahmad</h4>
        <p>Web developer</p>
        </div>
        <button onClick={()=>{changecolor('green')}}>CLick to Change color</button>
        <br />
        <button onClick={()=>{changecolor1('white')}}>CLick to Change color</button>
    </div>
  )
}

export default Card