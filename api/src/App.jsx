import React, { useEffect } from 'react'

function App() {
  useEffect(()=>{
    getuserdata()
  })
  async function getuserdata() {
    const url="https://dummyjson.com/users";
    let response= await fetch(url);
    response=await response.json()
    console.log(response.users);
    
  }
  return (
    <div>App</div>
  )
}

export default App