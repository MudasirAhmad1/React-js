import React from 'react'
import Data3 from './Data3'

function Data1() {
    const data=[
        {
            name:"Muzamil",
            age:32
        },
        {
            name:"Mudasir",
            age:34
        },
        {
            name:"Aabid",
            age:39
        },
        {
            name:"Aabid",
            age:39
        },
        {
            name:"Aabid",
            age:39
        },
        {
            name:"Aabid",
            age:39
        },

    ]
  return (
    <div>
        {
            data.map((item,index)=>(
                <div key={index}>
                    <Data3 item={item}/>
                </div>
            ))
        }
    </div>
  )
}

export default Data1