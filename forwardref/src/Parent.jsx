import React, { useState } from 'react'
import Inputbox from './Inputbox';
import Showtext from './Showtext';

function Parent() {

    const [data,setdata]=useState({
        name:"Mudasir",
        city:"Banglore",
        age:25,
    })
        
  return (
    <div>
        {/* <Inputbox text={text} settext={settext}/>
        <Showtext text={text}/> */}
    </div>
  )
}

export default Parent