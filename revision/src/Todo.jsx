import React, { useState } from 'react'

function Todo() {
    const [fruit,setFruit]=useState("Apple");
    const [counter,setcounter]=useState(99);

    const [display,setdisplay]=useState('none');

    function change() {
        setFruit((prev) => (prev === "Apple" ? "Banana" : "Apple"));
    }
    function add() {
        if (counter==100) {
            return
        }
        setcounter(counter+1);
    }
    function sub() {
        if (counter==0) {
            return
        }
        setcounter(counter-1);
    }
    function changedisplay() {
        // setdisplay(prev => (prev === "block" ? "none" : "block"));
        setdisplay(prev=>(prev==="block"?"none":"block"));
        //     setDisplay(prev => (prev === "block" ? "none" : "block"));
        console.log(display);
        
        console.log("Change display");
        
    }
    
  return (
    <div>
        <h1>{fruit}</h1>
        <button onClick={change}>Click to Change: </button>

        <button onClick={add}>click to add: {counter}</button>
        <button onClick={sub}>click to Sub: {counter}</button>
        <br />

        <h1 style={{display:display}}>Mudasir {display}</h1>
        <button onClick={changedisplay}>toogle</button>

        
        
    </div>
  )
}

export default Todo