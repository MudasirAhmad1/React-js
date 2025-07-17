import React, { useRef } from 'react'
import Userinput from './Userinput';

function Forward() {
    const inputref=useRef(null);

    const handleclick=()=>{
        inputref.current.value="Mudasir";
    }
  return (
    <div>
        <h1>Forward Ref </h1>
        <Userinput ref={inputref}/>
        <button onClick={handleclick}>Click Here</button>
    </div>
  )
}

export default Forward