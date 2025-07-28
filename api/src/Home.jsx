import React from 'react'
import { Link} from "react-router-dom";

function Home() {
  return (
    <div>
        <h1>Welcome to Home Page </h1>
        <Link to="/user/123">Go to User 123</Link>
    </div>
  )
}

export default Home