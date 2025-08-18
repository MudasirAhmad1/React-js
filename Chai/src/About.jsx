import React from 'react'
import Contact from './Contact'
import Project from './Project';

function About() {
    const user=['red','green','center']
    const col="white";
    const user1={
        color:'white',
        textAlign:'center',
        backgroundColor:'red'
    }
  return (
    <div>
        <Contact mudi={user}/>
        <Project/>
    </div>
  )
}

export default About