import React, { useState } from 'react';

function New() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  let [check,setcheck]=useState([]);
  
  const clear = () => {
    setData1("");
    setData2("");
  };

  return (
    <div>
      <h1>{data1} {data2}</h1>
      
      <input
        type="text"
        placeholder="Enter data 1"
        value={data1}
        onChange={(e) => setData1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter data 2"
        value={data2}
        onChange={(e) => setData2(e.target.value)}
      />
      <br />
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default New;
