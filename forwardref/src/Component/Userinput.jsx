import React from 'react'

function Userinput({ref}) {
  return (
    <div>
        <input type="text" placeholder='Enter The text:' ref={ref} />
    </div>
    
  )
}

export default Userinput