import React, { useActionState } from 'react'

function UseAction() {
    const handlelogin=(prevdata,formData)=>{
        let name=formData.get('name');
        let password=formData.get('password');
        console.log(name,password);
        const regex = /^[A-Z0-9]+$/i;
        if (name.length>5) {
            return {error:"Name should not be less than 5 digits"}
        }
        else if(!regex.test(password)){
            return {error:"Password should not be less than 5 digits"}
        }
        else{
            return{message:'login done'}
        }
        
        console.log("Called");  
    }
    const [data,action,loading]=useActionState(handlelogin);
    console.log(data);
    
  return (
    <div>
        <h1>Validation with use Action State</h1>
        {
            data?.message && <span>{data?.message}</span>
        }
        {
            data?.error && <span>{data?.error}</span>
        }
        <form action={action}>
            <input type="text" name='name' placeholder='Enter the Name:' />
            <br />
            <br />
            <input type="text" name='password' placeholder='Enter the password:' />
            <br />
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default UseAction