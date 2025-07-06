import React from 'react'

function Login() {
    const name = "John";
    let x=45;
    let y=23;
    function add(a,b){
        return a+b;
    }
    const array=[1,2,3,4,5,6,7,8,9,10];
    const myobj={
        name:"Mudassir",
        age:20,
        city:"Delhi"
    }
    const path="https://png.pngtree.com/background/20230517/original/pngtree-nature-wallpaper-a-path-in-beautiful-park-picture-image_2640870.jpg";
    const mudi=()=>{
        alert("Welcome to Website");
    }
    const fruits=(name)=>{
        alert(`The Fruit name is:  ${name}`);
    }

  return (
    <div>
        <h1>Welcome to the website Login </h1>
        <h2>{name}</h2>
        <h2>{x+y}</h2>
        <h2>{add(3,3)}</h2>
        <h2>{array[3]}</h2>
        <h2>{myobj.name}</h2>
        <img src={path}/>
        <button onClick={mudi}>Click Me</button>
        <button onClick={()=>{
            fruits("Apple");
        }}>Fruits</button>
    </div>


  )
}

export default Login

export function Welcome(){
    return(
        <h1>Welcome to the website Google </h1>
    )
}