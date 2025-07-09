import React from 'react'

function Loop({item}) {
    console.log(item.student[1].name);
    
    
  return (
    <div>
        <h4>{item.email},{item.name}
            {item.student.map((student,index1)=>(
                <li key={index1}>{student.name}</li>
            ))}
        </h4>
        
    </div>
    
  )
}

export default Loop