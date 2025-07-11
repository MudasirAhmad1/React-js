import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const input=useRef(null);
  const handles=useRef(null);

  const handle=()=>{
  console.log(input);
  input.current.focus();
  input.current.style.color='red';  
  input.current.value='123';
  input.current.placeholder="Enter Password";
  }
  const handle2=()=>{
    console.log(handle2);
    if (input.current.style.display!='none') {
      input.current.style.display='none'
    }
    else
    input.current.style.display='inline'
  }
  const changecolor=()=>{
    handles.current.style.color='red';
    
  }
  

  return (
    <>
      <input ref={input} type="text" placeholder='Enter The text' />
      <button onClick={handle}>Focus On Input</button>
      <button onClick={handle2}>Toggle</button>

      <h1 ref={handles}>Welcome Mudasir</h1>
      <button onClick={changecolor}>Change Color</button>
      
    </>
  )
}

export default App
