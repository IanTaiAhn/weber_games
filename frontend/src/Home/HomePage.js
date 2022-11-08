import React, { useEffect, useState } from "react";
// import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    //create a home page
    <div className="home-page">
      <h1>HomePage</h1>
      <Link className="text-4xl text-black" to="/Menu">
        Menu
      </Link>
    </div>
  );
};

export default HomePage;
