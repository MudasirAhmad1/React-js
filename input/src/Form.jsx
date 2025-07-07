import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <>
    <h2>
    <form action="" method="get">
        <input onChange={(event)=>{
            setName(event.target.value);
        }} type="text" value={name} placeholder='Enter your name' />
        <br />
        <input onChange={(event)=>{
            setEmail(event.target.value);
        }} value={email} type="email" placeholder='Enter your email' />
        <br />
        <input onChange={(event)=>{
            setPassword(event.target.value);
        }} value={password} type="password" placeholder='Enter your password' />
        <br />
        <input type="submit" value="Submit" />
        <button onClick={
            ()=>{
                setName("");
                setEmail("");
                setPassword("");
            }
        }>Clear</button>
    </form>
    </h2>
    <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
    </>
  )
}

export default Form