import React, { useEffect, useState } from "react";
// import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    //create a home page
    <div className="home-page">
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
