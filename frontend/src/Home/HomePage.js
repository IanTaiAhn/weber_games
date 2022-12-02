import React, { useEffect, useState } from "react";
const HomePage = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <section className="relative h-screen">
      {/*  */}
      <div className="flex flex-row group">
        <div className="bg-cyan-800 h-screen animate-divGrowFromMidToLeft"></div>
        {/* <!-- Center of stage for display --> */}
        <div className="absolute sm:bottom-1/2 bottom-1/2 left-1/2 -translate-x-1/2">
          <div className=" mx-auto flex flex-col space-y-6 items-center mt-16 animate-scaleUp animation-delay-900">
            <h1 className="text-6xl animate-fadeInSlow font-mono text-center">
              Welcome to Weber Games!
            </h1>
            {localStorage.length === 0 ? (
              <div className="animate-fadeInSlow">
                <p className="text-2xl ">
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
              </div>
            ) : (
              <div className="animate-fadeInSlow">
                {/* <p className="text-2xl"></p> */}
                <p className="text-3xl font-mono">
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
          </div>
        </div>
        <div className="bg-cyan-800 h-screen animate-divGrowFromMidToRight"></div>
      </div>

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
    </section>
  );
};

export default HomePage;
