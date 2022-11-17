import React, { useEffect, useState } from "react";
localStorage.clear();
const HomePage = () => {
  return (
    //create a home page
    <div className="container mx-auto flex flex-col space-y-6 items-center mt-16">
      <h1 className="text-5xl">Welcome to Weber Games!</h1>
      {localStorage.length === 0 ? (
        <p className="text-2xl">
          <span className="bg-blue-700 rounded p-1">
            <a
              href="LoginPage"
              className="text-yellow-300 cursor-pointer no-underline hover:text-blue-200"
            >
              Log in
            </a>
          </span>{" "}
          to your account to track your scores!
        </p>
      ) : (
        <div>
          {/* <p className="text-2xl"></p> */}
          <p className="text-2xl">
            Hello {localStorage.getItem("UserDisplayName")}! Click for the{" "}
            <span className="bg-blue-700 rounded p-1">
              <a
                href="Menu"
                className="text-yellow-300 cursor-pointer no-underline hover:text-blue-200"
              >
                fun
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
