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
import Navbar from './Component/Navbar'
import Form from './Form'
import Useradd from './Useradd'
import Delete from './Delete'

function App() {
  return (
    <>
    {/* <Input/> */}
    {/* <Array/> */}
    {/* <Custom/> */}
    {/* <CounterApp/> */}
    {/* <InputExample/> */}
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/delete' element={<Delete/>}/>
        <Route path="/project" element={<Project/>} />
        <Route path="/adduser" element={<Useradd/>}/>
        <Route path="/form" element={<Form/>}/>
        

        
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App