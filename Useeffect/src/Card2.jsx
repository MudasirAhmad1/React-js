import React from 'react'
import { useState } from 'react'

function Card2() {
    const [styles,setstyles]=useState(
        {
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '20px',
        transition: 'all 0.3s ease',
        border:'1px solid black',
        width:'500px',
        display:'flex'
        }
    )
    const data=[
        {
        name:"Mudasir Ahmad",
        Profession:"Web Developer",
        image:"https://www.w3schools.com/tags/img_girl.jpg"
        },
        {
            name:"Mudasir Ahmad",
            Profession:"Web Developer",
            image:"https://www.w3schools.com/tags/img_girl.jpg"
            },
            {
                name:"Mudasir Ahmad",
                Profession:"Web Developer",
                image:"https://www.w3schools.com/tags/img_girl.jpg"
                },
    ]
  return (
    <>
    <h1 style={{border:'1px solid black'}}>The Cards Are Here </h1>
    <h1 style={{display:"block"}}>
        {
            data.map((item,index)=>(
                <div key={index} style={styles}>
                    <div>
                    <img src={item.image} alt="image" />
                    </div>
                    <div style={{border:'1px solid black', textAlign:'center'}}>
                    <h3>{item.name}</h3>
                    <p>{item.Profession}</p>
                    </div>
                </div>
            ))
        }
        
    </h1>
    </>
  )
}

export default Card2