import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Form() {
    const url="http://localhost:3000/users";
    let [data,setdata]=useState([]);
    const navigate=useNavigate();
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        userdata();
    },[])
    async function userdata() {
        let response=await fetch(url);
        response=await response.json();
        // console.log(response);
        setdata(response);
        console.log(data); 
    }
    const deleteuser=async (id)=>{
        console.log(id);
        let response=await fetch(url+"/"+id,{
            method:'DELETE'
        });
        response=await response.json();
        if (response) {
            alert("Data Deleted")
            userdata();
        }
    }
    const edituser=(id)=>{
        navigate("/delete"+id)
        console.log();
        
    }
  return (
    <>
    <h1>Integrate Json Server Api  and Loader </h1>
    {
        !loading?
            
     data.map((item,index)=>(
        <ul  key={index} style={{border: '2px solid black', color:'black',  fontWeight:'bolder',width:'600px',paddingLeft:'20px',marginLeft:'100px', display:'flex', justifyContent:'left'}}>
       <li style={{listStyle:'none'}}>Name: {item.name}</li>
       <li style={{listStyle:'none'}}>Email: {item.email}</li>
       <li style={{listStyle:'none'}}>Age: {item.age}</li>
       <li style={{listStyle:'none', marginLeft:'50px'}}><button onClick={()=>{
        deleteuser(item.id)
       }}>Delete</button></li>
       <li style={{listStyle:'none', marginLeft:'50px'}}><button onClick={()=>{
        edituser(item.id)
       }}>Edit User</button></li>
        </ul>
     )):<h1>Data LOading..</h1>   
    }
    </>
  )
}

export default Form