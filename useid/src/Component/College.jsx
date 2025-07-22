import React, { useContext, useState } from 'react'
import Classs from './Classs'
import { usercontext } from './Createcontext';

function College() {
    const [data,setdata]=useState();
  return (
    <div style={{ backgroundColor:'green',padding:'10px'}}>
        <h1>College Componenet</h1> 
       <usercontext.Provider value={data}>
        <Classs />
      </usercontext.Provider>

        <select name="subject" id="" onChange={(e)=>{
            setdata(e.target.value);
        }}>
            <option value="Math">Math</option>
            <option value="History">History</option>
            <option value="Urdu">Urdu</option>
        </select>
    </div>
  )
}

export default College