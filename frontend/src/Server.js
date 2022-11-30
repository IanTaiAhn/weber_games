import React, { useState, useEffect } from "react";

function Server() {
  const [data, setData] = useState([{}]); // empty array of dictionaries
  const [games, setGames] = useState([{}]);
  const [leaderboard, setleaderboard] = useState([{}]);

  // // Gets all users from User table from database
  // useEffect(() => {
  //   // configure fetch data
  //   fetch("http://127.0.0.1:5000/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       // console.log(data[0].UserName);
  //       // console.log(data[0]);
  //       // console.log(data[2]);
  //       // console.log(data.UserDisplayName);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []); // the empty array at the end ensures it runs only once

  // // Gets all Games from Game table from database
  // useEffect(() => {
  //   // configure fetch data
  //   fetch("http://127.0.0.1:5000/games")
  //     .then((response) => response.json())
  //     .then((games) => {
  //       setGames(games);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []); // the empty array at the end ensures it runs only once

  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/hangman")
      .then((response) => response.json())
      .then((leaderboard) => {
        setleaderboard(leaderboard);
        console.log(leaderboard);
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
      {/* {typeof data === "undefined" ? (
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
      )} */}
      {/* Get Users end */}
      {/* Get Games start */}
      {/* {typeof data === "undefined" ? (
        <p>loading......</p>
      ) : (
        games.map((el, index) => (
          <h1 key={index}>
            {" "}
            id: {el.Gameid} | GameName: {el.GameName} | Genre: {el.Genre}
          </h1>
        ))
      )} */}
      {/* Get Games end */}
      {/* Get leaderboard start */}
      <div className="flex flex-row justify-center p-2 mt-8">
        {/* <div className="flex flex-col justify-center space-y-2 p-2"> */}
        <table className="text-5xl table-auto border-separate border-spacing-4 border-2 border-cyan-500">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>GuessedWord</th>
              <th>Tries</th>
            </tr>
          </thead>
          <tbody>
            {typeof data === "undefined" ? (
              <p>loading......</p>
            ) : (
              leaderboard.map((el, index) => (
                <tr className="p-2">
                  {" "}
                  <td>{index + 1}</td>
                  <td>{el.UserDisplayName}</td>
                  <td>{el.GuessedWord}</td>
                  <td>{el.Tries}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* {typeof data === "undefined" ? (
        <p>loading......</p>
      ) : (
        leaderboard.map((el, index) => (
          <h1 className="p-2">
            {" "}
            Player: {el.UserDisplayName} | GuessedWord: {el.GuessedWord} | # of
            Tries: {el.Tries}
          </h1>
        ))
      )} */}
        {/* </div> */}
        {/* Get leaderboard end */}
      </div>
    </div>
  );
}

export default Server;
