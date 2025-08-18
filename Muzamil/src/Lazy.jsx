import React, { lazy, Suspense, useState } from 'react'
import Use from './Use'

const User=lazy(()=>import('./User'));
function Lazy() {
  const [load,setload]=useState(false)
  return (
    <div>
      {/* <Use/> */}
      <p>Project One</p>
      <button onClick={()=>{
        setload(true)
      }}>Click</button>

      {
        load?<Suspense fallback={<h1>Loading.....</h1>}>
          <User/>
        </Suspense>:null
      }

    </div>
  )
}

export default Lazy