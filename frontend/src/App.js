import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}]) // empty array of dictionaries

  useEffect(() => {
    // configure fetch data
    fetch('http://127.0.0.1:5000/api/members')

      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, []) // the empty array at the end ensures it runs only once

  return (
    <div>
      {(typeof data.members === 'undefined') ? <p>loading...</p> :
        (data.members.map((member, index) => (
          <h1 key={index}> Name: {member.name} | HighScore: {member.score} | Age: {member.age}</h1>
        )))}
    </div>
  )
}

export default App
