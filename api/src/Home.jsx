import React, { useState } from 'react'
import { Link} from "react-router-dom";

function Home() {
  const [name,setname]=useState();
  const [namerr,setnamerr]=useState();
   const [pass,setpass]=useState();
  const [passrr,setpassrr]=useState();
  const handlename=(e)=>{
    console.log(e.target.value);
    if (e.target.value.length>5) {
      setnamerr("Please ENter less than 5");
    }
    else{
      setnamerr('')
    }
  }
  const handlename1=(e)=>{
    console.log(e.target.value);
    if (e.target.value.length>5) {
      setpassrr("Please ENter less than 5");
    }
    else{
      setpassrr('')
    }
  }
  return (
    <div>
        <h1>Welcome to website</h1>
        <input type="text" name="" id="1" placeholder='Enter the Username' onChange={handlename} />
        <span>{namerr && namerr}</span>
        <br />
        <br />
        <input type="password" name="" id="2" placeholder='Enter the Password' onChange={handlename1} />
        <span>{passrr && passrr}</span>
        <br />
        <br />
        <button>Login</button>
    </div>
  )
}

export default Home