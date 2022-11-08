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
        // console.log(data);
        // console.log(data.UserDisplayName);
      });
  }, []); // the empty array at the end ensures it runs only once

  const dataArr = Object.entries(data);
  // This is almost correct to correctly display queried data.
  // {dataArr.map((el, i) => (
  //   <h1 key={i} className="">
  //     {/* {el[0]} */}
  //     {el}
  //     {console.log(el[0])}
  //   </h1>
  // ))}
  return (
    <div className="container mx-auto">
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
      {/* Currently working on mapping through the array of objects to avoid duplicate html. */}
      <div className="space-x-6">
        <Link className="text-3xl text-black" to="/HomePage">
          Home
        </Link>
        <Link className="text-3xl text-black" to="/Menu">
          Menu
        </Link>
      </div>
      <div className="flex flex-col m-4 p-2 space-y-4">
        <p className="text-4xl">
          Returning information from database in the form of json
        </p>
        <div className="">
          <p className="text-2xl">ID: {data.id}</p>
          <p className="text-2xl">Username: {data.UserName}</p>
          <p className="text-2xl">Password: {data.UserPass}</p>
          <p className="text-2xl">Gamer Tag: {data.UserDisplayName}</p>
        </div>
      </div>
      {/* Another way to display the data that is scalable will be here. (Isn't working rn... ?). */}
    </div>
  );
}

export default Server;
