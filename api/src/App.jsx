import React from 'react'
import Userdata from './Userdata'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Adddata from './Adddata';
import Data from './Data';
import User from './User';
import Useredit from './Useredit';
import Mudi from './Mudi';
import Mudi2 from './Mudi2';
import UseAction from './UseAction';
import Project from './Project';

function App() {
  return (
    <div>
      
      <nav style={{display:'flex', justifyContent:'space-around'}}> 
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}> About</Link>
      <Link to={"/userdata"}> Userdata</Link>
      <Link to={"/adddata"}> Userdata</Link>
      <Link to={"/data"}>Data</Link>
      <Link to={"/mudi"}>Mudi</Link>
      <Link to={"/useaction"}>UseAction</Link>
      <Link to={"/project"}>Project</Link>
      </nav>
       <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/user/:id" element={<User />} /> Dynamic Route */}
        <Route path="/about" element={<About/>} />
        <Route path='/userdata' element={<Userdata/>}/>
        <Route path='/adddata' element={<Adddata/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/mudi' element={<Mudi/>}/>
        <Route path='/mudi/:id' element={<Mudi2/>} />
        <Route path='/data/Useredit/:id' element={<Useredit/>}/>
        <Route path='/useaction' element={<UseAction/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
     
    </div>
  )
}

export default App