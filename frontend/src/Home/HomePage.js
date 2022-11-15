import React, { useEffect, useState } from "react";
// import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    //create a home page
    <div className="home-page flex flex-col space-y-6">
      <Navbar />
      <h1>HomePage</h1>
      {/* <Link className="text-4xl text-black" to="/Menu">
        Menu
      </Link>
      <Link className="text-4xl text-black" to="/Server">
        Server
      </Link> */}
    </div>
  );
};

export default HomePage;
