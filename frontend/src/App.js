import React from "react";
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
import Main from "./Hangman/Main.js";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<LoginPage />} /> */}
      {/* Set up a route to my hangman in here, or maybe from Jorge's thang */}
      <Route exact path="/Menu" element={<Menu />} />
      <Route exact path="/LoginPage" element={<LoginPage />} />
      <Route exact path="/HomePage" element={<HomePage />} />
      <Route exact path="/SignUpPage" element={<SignUpPage />} />
      <Route exact path="/Hangman" element={<Main />} />
      {/* <Route path="/home" element={<HomePage/> } /> */}
    </Routes>
  );
}

export default App;
