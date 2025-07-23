import React from 'react'
import { Link } from 'react-router-dom'

function User() {
    const data=[
        {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
         {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
         {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
         {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
         {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
         {
            name:"Mudasir",
            email:"mudasirahmad@gmail.com",
            address:"Khanday mohalla pattan"
        },
    ]
  return (
    <div>
        <h1>Welcome to User </h1>
        {
            data.map((item,index)=>(
                <h2 key={index}><Link>{item.name}</Link></h2>
            ))
        }
    </div>
  )
}

export default User