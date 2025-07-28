import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Data() {
  const navigate = useNavigate();
  const [userdata, setdata] = useState([]);

  useEffect(() => {
    apidata();
  }, []);

  async function apidata() {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setdata(response);
    console.log(response[1]?.name);
  }

  async function deletedata(id) {
    const url = "http://localhost:3000/users";
    let response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    response = await response.json();
    if (response) {
      alert("Record deleted");
      apidata();
    }
  }

  function editdata(id) {
    console.log(id);
    navigate(`/data/Useredit/${id}`);
  }

  return (
    <div>
      <Link to="/data/Useredit">Go to User 123</Link>
      <h1>API Data</h1>
      {
        userdata.map((item) => (
          <ul key={item.id} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid black', padding: '30px', listStyle: 'none' }}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.age}</li>
            <button onClick={() => deletedata(item.id)}>Delete</button>
            <button onClick={() => editdata(item.id)}>Edit</button>
          </ul>
        ))
      }
    </div>
  );
}

export default Data;
