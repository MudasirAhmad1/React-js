import React from 'react'
import { useState } from 'react'

function Card() {
    const [grid, setGrid] = useState(true);
    const [styles,setstyles]=useState({
    display: grid ? 'flex' : 'block',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
    transition: 'all 0.3s ease',}
    )
    const updatetheme=(bgColor)=>{
        setstyles({...styles,backgroundColor:bgColor,})
    }

    const updatethem2=(color)=>{
        setstyles({...styles,backgroundColor:color})
    }

  return (
    <>
    <button onClick={()=>{
        updatetheme('grey')
    }}>Default Theme</button>
    <button onClick={()=>{
        updatethem2('white')
    }}>Light Theme</button>
    <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
    <div style={styles}>

         <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
        <div>
        <div style={{border: '1px solid black', padding: '10px', width: '300px',boxShadow:'inherit'}}>
        <img style={{width:'300px'}} src="https://www.w3schools.com/tags/img_girl.jpg" alt="" />
        <div style={{border: '1px solid black'}}>
        <h4 style={{textAlign:'center'}}>Mudasir Ahmad</h4>
        <p style={{textAlign:'center'}}>Web Developer</p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Card