import { useContext } from "react"
import { UserContext } from "../Context"


function Student() {
  const user=useContext(UserContext);
  console.log(user);
  
  return (
    <div style={{background:"red", textAlign:"center", padding:"100px"}}>
              <h1>Hi From 4th Main{user}</h1>
    </div>
  )
}

export default Student