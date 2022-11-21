// import React from "react";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage.js";
import HomePage from "./Home/HomePage.js";
import SignUpPage from "./LoginPage/SignUpPage.js";
import Menu from "./Menu/Menu";
import Main from "./hangman/main.js";
import Server from "./Server.js";

function App() {
  const [data, setData] = useState([{}]); // empty array of dictionaries
  useEffect(() => {
    // configure fetch data
    fetch("http://127.0.0.1:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); // the empty array at the end ensures it runs only once
  return (
    <Routes>
      {/* <Route exact path="/" element={<LoginPage />} /> */}
      <Route exact path="/Menu" element={<Menu />} />
      <Route exact path="/LoginPage" element={<LoginPage Users={data} />} />
      <Route exact path="/" element={<LoginPage Users={data} />} />
      <Route exact path="/SignUpPage" element={<SignUpPage />} />

      <Route exact path="/Hangman" element={<Main />} />
      <Route exact path="/Server" element={<Server />} />
      {/* <Route path="/home" element={<HomePage/> } /> */}
    </Routes>
  );
}

export default App;
