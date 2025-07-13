import React, { useState } from 'react'

function Rev() {
    const [display,setdisplay]=useState(true)
    const hide=()=>{
        setdisplay(!display);
    }

    const [data,setdata]=useState(1);
  return (
    
    <div>
        <h1>Welcome</h1>
        {
            display?<h1>Mudasir Ahmad</h1>:null
        }
        <button onClick={hide}>Click to hide</button>

        {
            data===1 ? <h1>Counter 1</h1>:
            data===2 ? <h1>Counter 2</h1>:
            data===3 ? <h1>Counter 3</h1>:
            data===4 ? <h1>Counter 4</h1>:
            data===5 ? <h1>Counter 5</h1>:
            data===6 ? <h1>Counter 6</h1>:
            <h1>Other Counter</h1>
        }
        <button onClick={()=>{
            setdata(data+1)
        }}>click to Add {data}</button>

    </div>
  )
}

export default Rev