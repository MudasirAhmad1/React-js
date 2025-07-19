import React from 'react'

function Input() {
    const [data,setdata]=useState()
  return (
    <div>
        <h1>Mudasir Aziz</h1>
       <input type="text" placeholder='Enter the text:' onChange={(e)=>{
        setdata(e.target.value);
        console.log(e.target.value);
       }} />
       <button>Click: {data}</button>
    </div>
  )
}

export default Input