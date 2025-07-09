import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Fun() {
    const [data,setdata]=useState(0)
    const [count,setcount]=useState(0)
    function add() {
        console.log("Welcome to Website");
    }
    
    useEffect(()=>{
        add()
    },[])

    useEffect(()=>{
        sub()
    },[count,data])

    function sub() {
        console.log("Welcome to Website and welcome again");
    }
  return (
    <div>
        <button onClick={()=>{
            setdata(data+1);
        }}>CLick Me {data}</button>

<button onClick={()=>{
            setcount(count+1);
        }}>CLick to Count {count}</button>

    </div>
  )
}

export default Fun