import React, { useState } from 'react';

function Array() {
  const [data, setData] = useState(['Mudasir', 'Muzamil', 'Aabid']);
  const [num, setNum] = useState('');

  const handle = () => {
    if (num.trim() !== '') {
      setData([...data, num]);
      setNum(''); // Clear input after adding
    }
  };

  return (
    <div>
      <h1>Welcome: {data.join(', ')}</h1>

      <input
        type="text"
        placeholder="Enter name:"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handle}>Click</button>
    </div>
  );
}

export default Array;
