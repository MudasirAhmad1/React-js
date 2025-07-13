import React from 'react'

function Prop({name="Google"}) {
  return (
    <div style={{border:'5px solid black'}}>
        {/* <h1>Name  : {data.name}</h1>
        <h1>Age : {data.age}</h1>
        <h1>Email : {data.email}</h1> */}

        <h1>{name}</h1>
    </div>
  )
}

export default Prop