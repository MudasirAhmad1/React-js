import React from 'react'
import Userdata from './Userdata'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Adddata from './Adddata';
import Data from './Data';

function App() {
  return (
    <div>
      
      <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}> About</Link>
      <Link to={"/userdata"}> Userdata</Link>
      <Link to={"adddata"}> Userdata</Link>
      <Link to={"data"}>Data</Link>
      </nav>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/userdata' element={<Userdata/>}/>
        <Route path='/adddata' element={<Adddata/>}/>
        <Route path='/data' element={<Data/>}/>
      </Routes>
     
    </div>
  )
}

export default App