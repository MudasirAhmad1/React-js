import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import ClickExamples from './components/ClickExamples';

function App() {
  let [counter,setcounter]=useState(1);
  const add=function () {
    setcounter(counter+1);
  }
  const sub=function () {
    if (counter==0) {
      return
    }
    setcounter(counter-1)
  }
  

  return (
    <>
      <h1>Welcome to Website  Small project counter with mudasir : {counter}</h1>
      <button onClick={add}>Click to add: {counter} </button>
      <br />
      <br />
      <button onClick={sub}>click to Subtract: {counter} </button>
      <Home/>
      <ClickExamples/>
    </>
  )
}

export default App
