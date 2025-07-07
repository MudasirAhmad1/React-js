import React, { useState } from 'react'

function Radio() {
    function gender(event){
        setGender1(event.target.value);
        console.log(event.target.value);
    }
    const [gender1,setGender1] = useState("male")
    const [value,setValue] = useState("Pattan")
  return (
    <div>
        <input checked={gender1=="male"} onChange={gender} type="radio" name="gender" id="male"value={"male"} />
        <label htmlFor="male">Male</label>
        <br />
        <input checked={gender1=="female"} onChange={gender} type="radio" name="gender" id="female" value={"female"} />
        <label htmlFor="female">Female</label>
        <br />
        <h1>{gender1}</h1>
        <h3>Select City</h3>
        <select name="" id="city" defaultValue={"Pattan"} onChange={(event)=>{
            console.log(event.target.value);
            setValue(event.target.value);
            
        }}>
            <option value="Sringar">Sringar</option>
            <option value="Pattan">Pattan</option>
            <option value="Sopore">Sopore</option>
        </select>
        <h2>{value}</h2>
    </div>
  )
}

export default Radio