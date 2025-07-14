import React from 'react'

function Map() {
    const mudi=[
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
        },
    ]
  return (
    <div>
        <h1>
            {
                mudi.map((item,index)=>(
                    <ul key={index}>
                        <li>{item.name}</li>
                        <li>{item.Class}</li>
                        <li>{item.email}</li>
                    </ul>
                ))
            }
        </h1>
    </div>
  )
}

export default Map