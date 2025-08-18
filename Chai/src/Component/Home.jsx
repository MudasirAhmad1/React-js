import React, { useState } from 'react'

function Home() {
  let [count,setcount]=useState([]);
  const handle=(e)=>{
    if()
    console.log(e.target.checked);
    
  }
  return (
    <>
    <h1 style={{textAlign:'center'}}>
    <br />
    <input type="checkbox" name="php" id="php" value={"php"} onChange={handle} />
    <label htmlFor="php">php</label>
    <br />
    <input type="checkbox" name="javascript" id="javascript" value={"javscript"} onChange={handle} />
    <label htmlFor="javascript">javascript</label>
    <br />
    <input type="checkbox" name="java" id="java" value={"java"} onChange={handle} />
    <label htmlFor="java">java</label>

    <br />
    <p>{count}</p>
    </h1>
    </>
  )
}

export default Home