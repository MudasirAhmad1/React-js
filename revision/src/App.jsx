import { useState } from 'react'
import './App.css'
import User, { Gul, Mul ,Num} from './User'
import Todo from './Todo';
import Rev from './Rev';
import Prop from './Prop';
import Wrapper from './Wrapper';
import New from './New';
import Check from './Check';
import Map from './Map';
import Arr from './Arr';
import Arr2 from './Arr2';
import Clock from './Clock';
import Clock2 from './Clock2';
import Useeff from './Useeff';
import Grop from './Grop';
import Card from './Card';
import Useref from './Useref';
import Passfun from './Passfun';





function App() {

  



  let name="Mudasir";
  const handle=()=>{
    alert("Welcome to world");
    name="Muzamil";
  }
  const myobj={
    name:"Muzamil",
    age:23,
    email:"Apple.mudasir@gmail.com"
  }

  const aabid=[
    {
    name:"Muzamil",
    age:23,
    email:"Apple.mudasir@gmail.com"
    },
    {
    name:"Muzamil",
    age:23,
    email:"Apple.mudasir@gmail.com"
    },
   { name:"Muzamil",
    age:23,
    email:"Apple.mudasir@gmail.com"
  }
  ]
  const myarray=[1,2,3,4,5,6,7];
  return (
    <>
      {/* <h1>{sub()}</h1>
      <Add/>
      <User/>
      <Mul/>
      <Gul/>
      <h1>{Num}</h1>
      {name}
      <h2>{myobj.email}</h2>

      <button onClick={handle}>Click Me </button>
      <Todo/>
      <Rev/> */}
      {/* <Prop data={myobj}/> */}
      {/* <Prop myarray={myarray}/> */}
      {/* <Prop name={"Muzamil"}/> */}
      {/* <Prop/> */}
      {/* <Wrapper >
        <h2>Welcome to Mudasir Aziz </h2>
      </Wrapper> */}
      {/* <New/> */}
      {/* <Check/> */}

      {/* <Map/> */}

      {/* <Arr2/> */}
      {/* <Clock2/> */}
      {/* <Useeff/> */}

      {/* <Grop/> */}
      {/* <Card/> */}

      {/* <Useref/> */}

      <Passfun/>
      


      {
        aabid.map((item,index)=>(
          <ul key={index}>
          <li>
            {item.name}{item.age}{item.email}
          </li>
          </ul>
        ))
      }
      <h1>{myarray}</h1>
    </>
  )
}

function Add(){
  return(
    <h2>Welcome To india</h2>
  )
}
export default App

function sub() {
  return 10+10;
}
