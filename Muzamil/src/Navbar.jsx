import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <div>
            <Link className='logo'><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className='logo' to="/"><h2>Home</h2></Link>
                </li>
                <li>
                     <Link className='logo' to="/contact"><h2>Contact</h2></Link>
                </li>
                <li>
                     <Link className='logo' to="/about"><h2>About</h2></Link>
                </li>
                 <li>
                     <Link className='logo' to="/college"><h2>College</h2></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar