import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickExamples from './Components/ClickExamples'
import { Welcome } from './Components/ClickExamples'
import Usest from './Components/Usest'
import Toggle from './Components/Toggle'
import College from './College'


 function Apple() {
  const myObject={
    name:"Mudasir",
    age:20,
    city:"Lahore",
  }
  const a=[1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
      {/* <Toggle/>
      <Usest/>
      <ClickExamples/>
      <Welcome/> */}
      {/* <College name="Mudasir" age={20} /> */}
      {/* <College name={myObject}/> */}
      {/* <College {...myObject}/> */}
      <College a={a}/>
    </div>
  )
}

export default Apple

