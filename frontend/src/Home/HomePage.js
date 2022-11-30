import React, { useEffect, useState } from "react";
const HomePage = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    //create a home page
    <div className="container mx-auto flex flex-col space-y-6 items-center mt-16">
      <h1 className="text-5xl">Welcome to Weber Games!</h1>
      {localStorage.length === 0 ? (
        <p className="text-2xl">
          <span className="bg-slate-500 rounded p-1">
            <a
              href="LoginPage"
              className="text-cyan-400 cursor-pointer no-underline hover:text-blue-200"
            >
              Log in
            </a>
          </span>{" "}
          to your account to track your scores!
        </p>
      ) : (
        <div>
          {/* <p className="text-2xl"></p> */}
          <p className="text-3xl">
            Hello{" "}
            <span className="font-bold">
              {localStorage.getItem("UserDisplayName")}!
            </span>{" "}
            Click for the{" "}
            <span className="bg-slate-500 rounded p-1 ">
              <a
                href="Menu"
                className="text-cyan-400 cursor-pointer no-underline hover:text-white "
              >
                fun!
              </a>
            </span>
          </p>
        </div>
      )}
      {/* Logout buttton on homepage.. idk if i like that. */}
      {/* {localStorage.length === 0 ? (
        <div></div>
      ) : (
        <button
          className="text-yellow-300 bg-blue-700 text-2xl rounded p-1 cursor-pointer no-underline hover:text-blue-200"
          onClick={logOut}
        >
          LogOut
        </button>
      )} */}
    </div>
  );
};

export default HomePage;
