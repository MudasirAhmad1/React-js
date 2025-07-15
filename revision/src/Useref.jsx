import React from 'react'
import { useRef } from 'react'

function Useref() {
    const data=useRef(null);
    const handler=()=>{
        console.log(data);
        data.current.focus();
        data.current.value='Mudasir';
        data.current.placeholder='Muzamil';
        data.current.style.color='red';
    }
    const toogle=()=>{
        console.log('Welcome');
        if (data.current.style.display!='none') {
            data.current.style.display='none';
        }
        else {
            data.current.style.display='inline';
        }
        
    }
  return (
    <div>
        <h1>
            Welcome to world 
            <br />
            <input type="text" placeholder='Enter the Text' ref={data} />
            <br />
            <button onClick={handler}>Click</button>

            <button onClick={toogle}>Toogle</button>


        </h1>
    </div>
  )
}

export default Useref