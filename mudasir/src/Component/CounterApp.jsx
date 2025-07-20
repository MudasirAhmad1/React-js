import React from 'react'
import useCounter from './useCounter'

function CounterApp() {
  const {data,increase}=useCounter();
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={increase}>click</button>
    </div>
  )
}

export default CounterApp