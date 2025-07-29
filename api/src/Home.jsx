import React, { useState } from 'react';

function Home() {
  const [name, setname] = useState('');
  const [namerr, setnamerr] = useState('');
  const [pass, setpass] = useState('');
  const [passrr, setpassrr] = useState('');

  const handlename = (e) => {
    const value = e.target.value;
    setname(value);
    if (value.length > 5) {
      setnamerr("Username must be 5 characters or less.");
    } else {
      setnamerr('');
    }
  };

  const handlename1 = (e) => {
    const value = e.target.value;
    setpass(value);
    const regex = /^[A-Z0-9]+$/i;
    if (!regex.test(value)) {
      setpassrr("Password must contain only letters and numbers.");
    } else {
      setpassrr('');
    }
  };

  return (
    <div>
      <h1>Welcome to website</h1>
      <input
        type="text"
        placeholder="Enter the Username"
        value={name}
        onChange={handlename}
      />
      <span style={{ color: 'red' }}>{namerr}</span>
      <br /><br />
      <input
        type="password"
        placeholder="Enter the Password"
        value={pass}
        onChange={handlename1}
      />
      <span style={{ color: 'red' }}>{passrr}</span>
      <br /><br />
      <button disabled={
  name.length === 0 ||
  name.length > 5 ||
  !/^[A-Z0-9]+$/i.test(pass) ||
  namerr ||
  passrr
}>Login</button>
    </div>
  );
}

export default Home;
