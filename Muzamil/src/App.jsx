import React from 'react'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router"
import Home from './Home'
import Navbar from './Navbar'
import Usecounter from './Usecounter'
import About from './About'
import Contact from './Contact'
import College from './College'
import Student from './Student'
import Department from './Department'
import Details from './Details'

function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <nav>
      <Link to="/">Home|</Link>
      <Link to="/about">About|</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path='/' element ={<h1>Welcome Home</h1>} />
        <Route path='/about' element ={<h1>Welcome to About Us</h1>}/>
        <Route path='/contact'element ={<h1>Welcome to Contact</h1>}/>
        <Route path='/*' element ={<Usecounter/>}/>
 
      </Routes>
    </nav> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

       <Route path="college" element={<College />}>
       <Route path="student" element={<Student />} />
       <Route path="details" element={<Details/>} />

       <Route path="department" element={<Department />} />

      </Route>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App