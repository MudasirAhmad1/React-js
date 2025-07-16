import React from 'react'

function Passfun({display,name}) {
  return (
    <div>
        <button onClick={()=>{
            display(name)
        }}>CLick to call</button>
    </div>
  )
}

export default Passfun