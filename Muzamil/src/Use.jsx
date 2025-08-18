import React, { Suspense, use } from 'react'

function Use() {
  const fetchData=()=>fetch("https://dummyjson.com/users").then((response)=>response.json());
  // console.log(fetchData());

  const userresource=fetchData();

  return (
    <div>
      <h1>Use Api in react js</h1>
      <Suspense fallback={<p>Loading...</p>}>
      <Users userresource={userresource}/>
      </Suspense>
    </div>
  )
}

export default Use

const Users=({userresource})=>{
  // console.log(userresource);
  const userdata=use(userresource)
  console.log(userdata.users);
  
  
  return(
    <>
    <h1>User List</h1>
    {
      userdata?.users?.map((item,index)=>(
      <h1>{item.email}</h1>
    ))
    }
    </>
  )
}