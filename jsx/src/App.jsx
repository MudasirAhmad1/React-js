import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Mudasir"
  function add() {
    return 10+19;
  }
  return (
    <>
      <button onClick={()=>alert("Hello World")}>Click me</button>
      <h1>Welcome</h1>
    </>
  )
}

export default App
