import React from 'react'
import { NavLink, Outlet } from 'react-router'

function College() {
  return (
    <div>
        <h1>Welcome to College website</h1>
        <NavLink to="student">Student|</NavLink>
        <NavLink to="details">Details|</NavLink>
        <NavLink to="Department">Department|</NavLink>
        <NavLink to="Student">Student|</NavLink>
        <Outlet/>
    </div>
  )
}

export default College