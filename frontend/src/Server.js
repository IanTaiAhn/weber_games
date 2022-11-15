import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Server() {
  const [data, setData] = useState([{}]); // empty array of dictionaries
  const [games, setGames] = useState([{}]);

  // Gets all users from User table from database
  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data[0].UserName);
        // console.log(data[0]);
        // console.log(data[2]);
        // console.log(data.UserDisplayName);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // the empty array at the end ensures it runs only once

  // Gets all Games from Game table from database
  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/games")
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // the empty array at the end ensures it runs only once

  // Post method to add a user.
  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       UserName: "Dalton",
  //       UserPass: "password123",
  //       UserDisplayName: "DaltonSwag",
  //     }),
  //   };
  //   fetch("http://127.0.0.1:5000/add_user", requestOptions).then((response) =>
  //     response.json()
  //   );
  // }, []);
  return (
    <div className="container mx-auto">
      {/* Get Users */}
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
      {/* Get Users end */}
      {/* Get Games start */}
      {typeof data === "undefined" ? (
        <p>loading......</p>
      ) : (
        games.map((el, index) => (
          <h1 key={index}>
            {" "}
            id: {el.Gameid} | GameName: {el.GameName} | Genre: {el.Genre}
          </h1>
        ))
      )}
      {/* Get Games end */}
    </div>
  );
}

export default Server;
