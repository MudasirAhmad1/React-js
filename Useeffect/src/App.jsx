import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fun from './Components/Fun'
import Card from './Card'
import Card2 from './Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Fun/> */}
      {/* <Card/> */}
      <Card2/>
    </>
  )