import React, { useState, useEffect } from "react";

function Server() {
  const [data, setData] = useState([{}]); // empty array of dictionaries

  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/user")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        console.log(data.UserDisplayName);
      });
  }, []); // the empty array at the end ensures it runs only once

  return (
    <div className="flex flex-col">
      {/* {typeof data.members === "undefined" ? (
        <p>loading......</p>
      ) : (
        data.members.map((member, index) => (
          <h1 key={index}>
            {" "}
            Name: {member.name} | HighScore: {member.score} | Age: {member.age}
          </h1>
        ))
      )} */}
      <p className="text-4xl">
        Returning information from database in the form of json
      </p>
      <p className="text-2xl">ID: {data.id}</p>
      <p className="text-2xl">Username: {data.UserName}</p>
      <p className="text-2xl">Password: {data.UserPass}</p>
      <p className="text-2xl">Gamer Tag: {data.UserDisplayName}</p>
    </div>
  );
}

export default Server;
