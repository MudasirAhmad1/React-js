import React, { lazy, Suspense } from 'react'
// import User from './User'
import { useState } from 'react'
const User = lazy(() => import('./User'));

function App() {
  const [load,setload]=useState(false)
  return (

     <>
      <p>Project one </p>
        <button onClick={()=>{
            setload(true)
        }}>Click to load</button>
        {
            load?<Suspense fallback={ <h1>Loading.....</h1> }><User/></Suspense> :null
        }
     </>
  
  )
}

export default App