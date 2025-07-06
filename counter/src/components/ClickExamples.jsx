import React, { useState, useRef } from 'react';

const ClickExamples = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  // Basic click handler
  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  // Click with event parameter
  const handleClickWithEvent = (event) => {
    console.log('Button clicked!', event);
    setText('Button was clicked!');
  };

  // Right click handler
  const handleRightClick = (event) => {
    event.preventDefault();
    alert('Right click detected!');
  };

  // Mouse move handler
  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  };

  // Mouse down handler for drag
  const handleMouseDown = (event) => {
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    setDragPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  // Mouse move handler for drag
  const handleDragMove = (event) => {
    if (isDragging) {
      setDragPosition({
        x: event.clientX - dragPosition.x,
        y: event.clientY - dragPosition.y
      });
    }
  };

  // Mouse up handler for drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard event handler
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  // Focus and blur handlers
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div 
      style={{ 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Advanced Click Examples
      </h1>

      {/* Basic Click Counter */}
      <div style={cardStyle}>
        <h3>1. Basic Click Counter</h3>
        <button 
          onClick={handleClick}
          style={buttonStyle}
        >
          Click me! Count: {count}
        </button>
      </div>

      {/* Click with Event */}
      <div style={cardStyle}>
        <h3>2. Click with Event Object</h3>
        <button 
          onClick={handleClickWithEvent}
          style={{ ...buttonStyle, backgroundColor: '#28a745' }}
        >
          Click to see event details
        </button>
        <p style={{ marginTop: '10px', color: '#666' }}>{text}</p>
      </div>

      {/* Right Click */}
      <div style={cardStyle}>
        <h3>3. Right Click Handler</h3>
        <div 
          onContextMenu={handleRightClick}
          style={{
            padding: '15px',
            backgroundColor: '#ffc107',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          Right click on this area
        </div>
      </div>

      {/* Mouse Coordinates */}
      <div style={cardStyle}>
        <h3>4. Mouse Coordinates Tracker</h3>
        <div style={{
          padding: '15px',
          backgroundColor: '#17a2b8',
          color: 'white',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          Mouse Position: X: {coordinates.x}, Y: {coordinates.y}
        </div>
      </div>

      {/* Draggable Element */}
      <div style={cardStyle}>
        <h3>5. Draggable Element</h3>
        <div
          ref={dragRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleDragMove}
          style={{
            position: 'absolute',
            left: dragPosition.x,
            top: dragPosition.y,
            width: '100px',
            height: '100px',
            backgroundColor: isDragging ? '#dc3545' : '#6f42c1',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            cursor: 'grab',
            userSelect: 'none',
            transition: 'background-color 0.2s'
          }}
        >
          Drag me!
        </div>
      </div>

      {/* Keyboard Events */}
      <div style={cardStyle}>
        <h3>6. Keyboard Events</h3>
        <input
          type="text"
          placeholder="Type and press Enter..."
          onKeyPress={handleKeyPress}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '5px',
            width: '250px'
          }}
        />
      </div>

      {/* Focus and Blur */}
      <div style={cardStyle}>
        <h3>7. Focus and Blur Events</h3>
        <input
          type="text"
          placeholder="Click to focus..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: `2px solid ${isActive ? '#007bff' : '#ddd'}`,
            borderRadius: '5px',
            width: '250px',
            transition: 'border-color 0.3s'
          }}
        />
        <p style={{ marginTop: '10px', color: '#666' }}>
          Status: {isActive ? 'Focused' : 'Not focused'}
        </p>
      </div>

      {/* Multiple Event Handlers */}
      <div style={cardStyle}>
        <h3>8. Multiple Event Handlers</h3>
        <button
          onClick={() => alert('Clicked!')}
          onMouseEnter={() => console.log('Mouse entered')}
          onMouseLeave={() => console.log('Mouse left')}
          onMouseDown={() => console.log('Mouse down')}
          onMouseUp={() => console.log('Mouse up')}
          style={{
            ...buttonStyle,
            backgroundColor: '#fd7e14',
            transition: 'all 0.3s ease'
          }}
        >
          Hover and click me!
        </button>
      </div>

      {/* Conditional Click Handler */}
      <div style={cardStyle}>
        <h3>9. Conditional Click Handler</h3>
        <button
          onClick={() => {
            if (count > 5) {
              alert('You\'ve clicked more than 5 times!');
            } else {
              setCount(prev => prev + 1);
            }
          }}
          style={{
            ...buttonStyle,
            backgroundColor: count > 5 ? '#dc3545' : '#20c997'
          }}
        >
          {count > 5 ? 'Reset Counter' : 'Click me (5 times max)'}
        </button>
        {count > 5 && (
          <button
            onClick={() => setCount(0)}
            style={{
              ...buttonStyle,
              backgroundColor: '#6c757d',
              marginLeft: '10px'
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  margin: '20px 0',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  border: '1px solid #e9ecef'
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

export default ClickExamples; 