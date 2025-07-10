import React from 'react'
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import UncontrolledExample from './UncontrolledExample';
import ColorSchemesExample from './ColorSchemesExample';
import ShapeExample from './ShapeExample';

function App() {
  return (
    <div>
      {/* <Button>Click</Button>
      <Alert key={'danger'} variant={'danger'}>
          This is a {'danger'} alert—check it out!
        </Alert> */}
        <ColorSchemesExample/>
        <UncontrolledExample/>
        <ShapeExample/>
        
    </div>
  )
}

export default App