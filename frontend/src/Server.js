import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Server() {
  const [data, setData] = useState([{}]); // empty array of dictionaries

  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/user")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data[0].UserName);
        // console.log(data[0]);
        // console.log(data[2]);
        // console.log(data.UserDisplayName);
      });
  }, []); // the empty array at the end ensures it runs only once
  return (
    <div className="container mx-auto">
      <div className="space-x-6">
        <Link className="text-3xl text-black" to="/HomePage">
          Home
        </Link>
        <Link className="text-3xl text-black" to="/Menu">
          Menu
        </Link>
      </div>
      {typeof data === "undefined" ? (
        <p>loading......</p>
      ) : (
        data.map((el, index) => (
          <h1 key={index}>
            {" "}
            id: {el.id} | UserName: {el.UserName} | Password: {el.UserPass} |
            GamerTag:
            {el.UserDisplayName}
          </h1>
        ))
      )}
      {/* This is the less cool way to display queried data.
      <div className="flex flex-col m-4 p-2 space-y-4">
        <p className="text-4xl">
          Returning information from database in the form of json
        </p>
        <div className="">
          <p className="text-2xl">ID: {data[0].id}</p>
          <p className="text-2xl">Username: {data[0].UserName}</p>
          <p className="text-2xl">Password: {data[0].UserPass}</p>
          <p className="text-2xl">Gamer Tag: {data[0].UserDisplayName}</p>
        </div>
        {typeof data[2] === "undefined" ? (
          <p>loading......</p>
        ) : (
          <div className="">
            <p className="text-2xl">ID: {data[2].id}</p>
            <p className="text-2xl">Username: {data[2].UserName}</p>
            <p className="text-2xl">Password: {data[2].UserPass}</p>
            <p className="text-2xl">Gamer Tag: {data[2].UserDisplayName}</p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Server;
