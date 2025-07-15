import React from 'react'
import Arr from './Arr'

function Arr2() {
    const mudi=[
        {
            name:"Mudasir",
            rollno:234,
            class:'secondary',
            email:"Mudasirahmad32@gmail.com"
        },
         {
            name:"Mudasir",
            rollno:234,
            class:'secondary',
            email:"Mudasirahmad32@gmail.com"
        },
         {
            name:"Mudasir",
            rollno:234,
            class:'secondary',
            email:"Mudasirahmad32@gmail.com"
        },
         {
            name:"Mudasir",
            rollno:234,
            class:'secondary',
            email:"Mudasirahmad32@gmail.com"
        },
    ]
  return (
    <div>
        <h2>Welcome to Map of  </h2>
        {
            mudi.map((item,index)=>(
                <ul key={index}>
                    <Arr data={item}/>
                </ul>
            ))
        }
    </div>
  )
}

export default Arr2