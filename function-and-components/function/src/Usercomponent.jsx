import React from 'react'

function Usercomponent() {
  return (
    <div>Usercomponent</div>
  )
}

export default Usercomponent
export function Login() {  //export function is used to make the function available to other files
    return (
      <div>
          <h1>User Just Login</h1>
      </div>
    )
  }
  
  export function Google() { //export function is used to make the function available to other files
      return(
          <div>
              <h1>Google Login</h1>
          </div>
      )
  }
