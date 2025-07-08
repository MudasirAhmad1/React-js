import React from 'react'

function Data() {
  const userdata = [
    {
      name: "Mudasir",
      age: 20,
      email: "mudasir@gmail.com",
      city: "Srinagar"
    },
    {
      name: "Muzamil",
      age: 22,
      email: "muzamil@gmail.com",
      city: "Pattan"
    },
    {
      name: "Aabid",
      age: 29,
      email: "abid@gmail.com",
      city: "Sopore"
    },
  ]

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td> 
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Data
