import React, { useState } from 'react'

function Home() {
    const [name,setname]=useState();
    const [password,setpassword]=useState()
    const [email,setemail]=useState()
  return (
    <>
    <h1>Controled componenet</h1>
    <form action="" method="get">
        <input type="text" placeholder='Enter the Name: ' id='text' onChange={(e)=>{setname(e.target.value)}} value={name} />
        <br />
        <br />
        <input type="email" name="" id="email" placeholder='Enter the Email:' onChange={(e)=>{setemail(e.target.value)}} value={email} />
        <br />
        <br />
        <input type="password" name="" id="password" placeholder='Enter the Password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
        <br />
        <br />
        <button onClick={()=>{
            setemail('')
            setname('')
            setpassword('')
        }}>Submit</button>

        <br />
        <h1>{name},{email},{password}</h1>

    </form>
    </>
  )
}

export default Home