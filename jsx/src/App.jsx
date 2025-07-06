import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickExamples from './Components/ClickExamples'
import { Welcome } from './Components/ClickExamples'
import Usest from './Components/Usest'


 function Apple() {
  return (
    <div>
      <Usest/>
      <ClickExamples/>
      <Welcome/>
    </div>
  )
}

export default Apple

