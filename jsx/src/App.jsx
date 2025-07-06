import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickExamples from './Components/ClickExamples'
import { Welcome } from './Components/ClickExamples'

function Apple() {
  return (
    <div>
      <ClickExamples/>
      <Welcome/>
    </div>
  )
}

export default Apple

