import React, { useState } from 'react'

function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [buttonText, setButtonText] = useState('Click me');
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  // Simple click handler
  const handleClick = () => {
    setClickCount(clickCount + 1);
    setButtonText(`Clicked ${clickCount + 1} times!`);
  };

  // Double click handler
  const handleDoubleClick = () => {
    alert('Double clicked!');
  };

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Home - Click Examples</h1>
      
      {/* Simple click counter */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Click Counter</h3>
        <button 
          onClick={handleClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {buttonText}
        </button>
        <span>Total clicks: {clickCount}</span>
      </div>

      {/* Double click example */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Double Click Example</h3>
        <button 
          onDoubleClick={handleDoubleClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Double click me!
        </button>
      </div>

      {/* Toggle visibility */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Toggle Visibility</h3>
        <button 
          onClick={toggleVisibility}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          {isVisible ? 'Hide' : 'Show'} Content
        </button>
        {isVisible && (
          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <p>This content can be toggled!</p>
            <p>Click the button above to hide/show this text.</p>
          </div>
        )}
      </div>

      {/* Form with click submission */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Form with Click Submit</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter some text..."
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginRight: '10px',
              width: '200px'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Mouse events */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Mouse Events</h3>
        <div
          onMouseEnter={() => console.log('Mouse entered')}
          onMouseLeave={() => console.log('Mouse left')}
          onMouseDown={() => console.log('Mouse down')}
          onMouseUp={() => console.log('Mouse up')}
          style={{
            padding: '20px',
            backgroundColor: '#e9ecef',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          Hover over me and check the console for mouse events!
        </div>
      </div>

      <Mudi/>
    </div>
  )
}

function Mudi() {
  const [isHovered, setIsHovered] = useState(false);

  return(
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          color: isHovered ? '#007bff' : '#333',
          cursor: 'pointer',
          transition: 'color 0.3s ease'
        }}
      >
        Google {isHovered && '👋'}
      </h2>
    </div>
  )
}

export default Home