import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Server from "./Server";
import reportWebVitals from "./reportWebVitals";
import Main from "./hangman/main";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Uncomment for the backend communciations code.
  // <React.StrictMode>
  //   <Server />
  // </React.StrictMode>

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
