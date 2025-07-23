import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <Link to={"/"}>Logo</Link>
        </div>
        <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/project"}>Project</Link>
      <Link to={"/user"}>User</Link>
      </div>
    </div>
  )
}

export default Navbar