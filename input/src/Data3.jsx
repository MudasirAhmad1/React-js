import React from 'react'

function Data3({item}) {
  return (
    <>
    <div style={{border:'7px solid black', width:'500px',height:'100px',textAlign:'center' }}>
    <h3 >Name of Custmer is : {item.name}</h3>
    <h3 >Age is : {item.age}</h3>
    {/* <h3>Name of Custmer is : </h3> */}
    </div>
    </>
  )
}

export default Data3