import React, { useId } from 'react'

function Useid() {
    const id=useId();
    const id1=useId();
    const id2=useId();
    const id3=useId();
  return (
    <div>
        <h1 id='id+"Google"'>{id+"Google"}Mudasir</h1>
        <h1>{id1}Mudasir</h1>
        <h1>{id2}Mudasir</h1>
    </div>
  )
}

export default Useid