import React from 'react'

function Arr() {
    const data=['mudasir','Aabid','Muzamil','Shugufta'];
  return (
    <div>
        {
            data.map((item,index)=>(
                <h3 key={index}>
                    <li>{data}</li>
                </h3>
            ))
        }

    </div>
  )
}

export default Arr