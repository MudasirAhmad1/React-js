import React from 'react'

function Gol({updateData}) {
  return (
    <div>
        <h1>
            <input type="text" onChange={(e)=>{
                updateData(e.target.value)
            }} />
        </h1>
    </div>
  )
}

export default Gol