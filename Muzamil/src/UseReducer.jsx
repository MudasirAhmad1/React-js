import React, { useReducer } from 'react'
const emptydata={
        name:'',
        email:'',
        password:'',
        city:'',
    }
    const reducer=(data,action)=>{
        return {...data,[action.type]:action.val}
        console.log(data,action);
        
    }
function UseReducer() {
    const [state,dispatch]=useReducer(reducer,emptydata);
    console.log(state);
    
    
  return (
    <div style={{textAlign:'center'}}>
        <form action="" method="get" style={{textAlign:'center'}}>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder='Enter the Usename:' />
        <br />
        <br />
        <input type="email" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder='Enter the Email:' />
        <br />
        <br />
        <input type="password" onChange={(e)=>dispatch({val:e.target.value,type:'password'})} placeholder='Enter the Password:' />
        <br />
        <br />
        <input type="city" onChange={(e)=>dispatch({val:e.target.value,type:'city'})} placeholder='Enter the City:' />
        <br />
        <br />
        <button>Submit</button>

    </form>

    <br />
    <br />
    <ul>
        <li>{state.name}</li>
        <li>{state.email}</li>
        <li>{state.age}</li>
    </ul>

    </div>
  )
}

export default UseReducer