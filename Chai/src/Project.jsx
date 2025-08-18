import React from 'react'

function Project() {
    const name=['muzamil','mudasir','aabid']
  return (
    <div>
        {
            name.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }

    </div>
  )
}

export default Project