import React from 'react'

function Contact({mudi}) {
    // console.log(mudi[2]);
    const name='red'
    const name1=mudi[0];
    //console.log(typeof name);
    
    //console.log(name1);
    

    
    
    
  return (
    <div>
        <h1 style={{backgroundColor:name1,textAlign:mudi[2],color:mudi[1]}}>Shugufta is Good {mudi}</h1>
    </div>
  )
}

export default Contact