import React, { useState } from 'react'

function useCounter() {
  const [data,setdata]=useState(0);
  const increase=()=>{
    setdata(data+1);
  }
  return (
    {data,increase}
  )
}

export default useCounter