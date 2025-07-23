import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Project from './Project'
import Navbar from './assets/Navbar'
import User from './assets/User'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/user' element={<User/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App