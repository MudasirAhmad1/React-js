import React, { useState } from 'react'
function Checkbox() {
    let [count,setCount] = useState([]) 
    function handle(event){
        console.log(event.target.value);
        if(event.target.checked){
            setCount([...count,event.target.value])
        }
        else{
            setCount([...count.filter((item) => {item!=event.target.value
                
            })])
        }
    }
  return (
    <div>
        <input onChange={handle}type="checkbox" name="" id="php" value={"php"} />
        <label htmlFor="php">PHP</label>
        <br />
        <input onChange={handle}type="checkbox" name="" id="Java" value={"java"} />
        <label htmlFor="Java">Java</label>
        <br />
        <input onChange={handle}type="checkbox" name="" id="C++" value={"c++"} />
        <label htmlFor="C++">C++</label>
        <h1>{`The Skill You have selected are ${count}`}</h1>

    </div>
  )
}

export default Checkbox