import React, { useState } from 'react'

function Usest() {
    let [counter,setcounter]=useState(3);
    const [Fruit,setFruit]=useState("Manago");
    const Changefruit=()=>{
        setFruit("Apple");
    }
  return (
    <div>
        <h1>
            <button onClick={Changefruit}>Click Me to Change fruit Name {Fruit}:</button>
            <button onClick={()=>{
                if (counter<10) {
                    setcounter(counter+1);
                }
                else{
                    return;
                    
                }
            }}>Counter Plus: {counter}</button>
            <button onClick={()=>{
                if (counter==0) {
                    return
                }
                else{
                    setcounter(counter-1);
                    
                }
            }}>Counter Minus  : {counter}</button>
        </h1>
    </div>
  )
}

export default Usest