import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav style={{ padding: '20px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '20px' }}>Contact</Link>
        <Link to="/project"style={{ marginRight: '20px' }} >Project</Link>
        <Link to="/form" style={{ marginRight: '20px' }}>Form</Link>
        <Link to="/adduser" style={{ marginRight: '20px' }}>Add User</Link>
        <Link to="/delete"style={{ marginRight: '20px' }} >Delete User</Link>
      </nav>
    </div>
  )
}

export default Navbar