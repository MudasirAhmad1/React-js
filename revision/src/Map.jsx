import React from 'react'

function Map() {
    const mudi=[
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
           student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name:'Mudasir',
            Class:"Fith year",
            email:"Mudasirahmad@gmail.com",
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
        {
            name: 'Mudasir',
            class: 'Fifth year',
            email: 'Mudasirahmad@gmail.com',
            student: [{
            name: 'Muzamill',
            class: '2nd'
            }
            ]
        },
    ]
  return (
    <div>
        <h1>
            {
                mudi.map((item,index)=>(
                    <ul key={index}>
                        {item.student.map((student,index2)=>(
                            <h2 key={index2}>
                                {student.name}
                            </h2>
                        
                        ))}
                    </ul>
                ))
            }
        </h1>
    </div>
  )
}

export default Map