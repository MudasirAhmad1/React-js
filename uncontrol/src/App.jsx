import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const user=document.getElementById("#user");
  const password=document.getElementById('#password');
  const submit=document.getElementById('#submit')
  const handle=(event)=>{
    event.preventdefault();
    console.log("Welcome");
  }
  return (
    <>
      <h1>Welcome to Mudasir</h1>
      <form action="" method="get">
        <input type="text" placeholder='Enter the Name:' id='user' />
        <br />
        <input type="password" name="" id="password" placeholder='Enter the password: ' />
        <br />
        <input type="submit" id='submit' value="Submit" onSubmit={handle} />
        <br />
      </form>
    </>
  )
}

export default App
