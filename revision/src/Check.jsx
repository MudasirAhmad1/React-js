import React, { useState } from 'react'

function Check() {
    const [data,setdata]=useState([]);
    const [count,setcount]=useState();

    const handle=(event)=>{
        if (event.target.checked)
        {
            setdata([...data,event.target.value])
        }
        else{
            setdata([...data.filter((item)=>(item!=event.target.value))])
            setdata([...data.filter((item)=>(item!=event.target.value))])
        }
    }

    const change=(event)=>{
        console.log(event.target.value);
        
    }
  return (
    <div>
        <h1>Checkbox data: {data}</h1>
        <input type="checkbox" name="" id="Java" value={"Java"} onChange={handle} />
        <label htmlFor="Java">Java</label>
        <br />
        <input type="checkbox" name="" id="Python" value={"Python"} onChange={handle} />
        <label htmlFor="Python">Python</label>
        <br />
        <input type="checkbox" name="" id="Node" value={"Node"} onChange={handle} />
        <label htmlFor="Node">Node</label>

        <br />
        <h2>Radio button</h2>
        <input type="radio" name="gender" id="Male" value={'Male'}  onChange={change}/>
        <label htmlFor="Male">Male</label>
         <input type="radio" name="gender" id="Female" value={'female'} onChange={change} />
        <label htmlFor="Female">Female</label>

        <br />

        <select name="" id="" defaultValue={'Kashmir'} onChange={(event)=>{
            setcount(event.target.value);
        }}>
            <option value="Delhi">Delhi</option>
            <option value="Jammu">Jammu</option>
            <option value="Kashmir">Kashmir</option>
            <option value="UttarPardesh">Uttar Pardesh</option>
        </select>
        <h4>{count}</h4>
    </div>
  )
}

export default Check