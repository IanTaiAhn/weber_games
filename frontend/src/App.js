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

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<LoginPage/> } /> */}
      <Route exact path="/LoginPage" element={<LoginPage />} />
      <Route exact path="/HomePage" element={<HomePage />} />
      <Route exact path="/SignUpPage" element={<SignUpPage />} />
      {/* <Route path="/home" element={<HomePage/> } /> */}
    </Routes>
  );
}

export default App;
