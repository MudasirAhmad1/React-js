import React from 'react'
import Input from './Component/Input'
import Array from './Component/Array'
import Custom from './Component/useCounter'
import CounterApp from './Component/CounterApp'
import InputExample from './Component/InputExample'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Project from './Component/Project'

function App() {
  return (
    <>
    {/* <Input/> */}
    {/* <Array/> */}
    {/* <Custom/> */}
    {/* <CounterApp/> */}
    {/* <InputExample/> */}
    <BrowserRouter>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/project" >Project</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project/>} />
        
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App