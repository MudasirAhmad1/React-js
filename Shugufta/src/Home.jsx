import React, { useState, useEffect } from 'react';

function Home() {
  const colors = JSON.parse(localStorage.getItem('color'));

  const [red, setRed] = useState(colors?.red ?? 0);
  const [green, setGreen] = useState(colors?.green ?? 0);
  const [blue, setBlue] = useState(colors?.blue ?? 0);

  const colorSave = () => {
    localStorage.setItem('color', JSON.stringify({ red, green, blue }));
    alert('Color saved!');
  };

  return (
    <div>
      <h1>Home</h1>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: '100px',
          height: '100px',
          borderRadius: '15px',
          marginBottom: '10px',
        }}
      ></div>

      <label>
        Red: {red}
        <br />
        <input
          type="range"
          min={0}
          max={255}
          value={red}
          onChange={(e) => setRed(Number(e.target.value))}
        />
      </label>
      <br />

      <label>
        Green: {green}
        <br />
        <input
          type="range"
          min={0}
          max={255}
          value={green}
          onChange={(e) => setGreen(Number(e.target.value))}
        />
      </label>
      <br />

      <label>
        Blue: {blue}
        <br />
        <input
          type="range"
          min={0}
          max={255}
          value={blue}
          onChange={(e) => setBlue(Number(e.target.value))}
        />
      </label>
      <br />

      <button onClick={colorSave}>Save</button>
    </div>
  );
}

export default Home;
