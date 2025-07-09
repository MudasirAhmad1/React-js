import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loop from './Loop'

function App() {
  const [count, setCount] = useState(0)
  const college=[
    {
      name:"University of Kashmir",
      email:"Google@gmail.com",
      student: [
        {
        name:"Muzamil",
        class:"2nd"
        },
        {
          name:"Tariq",
          class:"4nd"
          },
          {
            name:"Abid",
            class:"3nd"
            },
            {
              name:"Mudasirmil",
              class:"1nd"
              }
      ]
      
    },
    {
      name:"University of Kashmir",
      email:"Google@gmail.com",
      student: [
        {
        name:"Muzamil",
        class:"2nd"
        },
        {
          name:"Tariq",
          class:"4nd"
          },
          {
            name:"Abid",
            class:"3nd"
            },
            {
              name:"Mudasirmil",
              class:"1nd"
              }
      ]
    },
    {
      name:"University of Delhi",
      email:"Google@gmail.com",
      student: [
        {
        name:"Muzamil",
        class:"2nd"
        },
        {
          name:"Tariq",
          class:"4nd"
          },
          {
            name:"Abid",
            class:"3nd"
            },
            {
              name:"Mudasirmil",
              class:"1nd"
              }
      ]
    },
    {
      name:"University of Jammu",
      email:"Google@gmail.com",
      student: [
        {
        name:"Muzamil",
        class:"2nd"
        },
        {
          name:"Tariq",
          class:"4nd"
          },
          {
            name:"Abid",
            class:"3nd"
            },
            {
              name:"Mudasirmil",
              class:"1nd"
              }
      ]
    },
  ]

  return (
    <>
    <h1>Nested Looping </h1>
    <h1>
      {
        college.map((item,index)=>(
          <div key={index}>
            <Loop item={item}/>
          </div>
        ))
      }
    </h1>
    </>
  )
}

export default App
