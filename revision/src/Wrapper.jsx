import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{color:'green'}}>
        {children}
      
    </div>
  )
}

export default Wrapper