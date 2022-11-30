import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO Don't allow empty strings to create logins!
const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [emptyFields, setEmptyFieldErrMessage] = useState(false);
  let navigate = useNavigate();

  let signInCheck = () => {
    let username = document.getElementById("formBasicUsername").value;
    let userDisplayName = document.getElementById(
      "formBasicUserDisplayName"
    ).value;
    let password = document.getElementById("formBasicPassword").value;
    let password2 = document.getElementById("formBasicPassword2").value;

    if (username === "" || password === "") {
      // No empty strings.
      setEmptyFieldErrMessage(true);
      return console.log("empty string");
    }
    if (password === password2) {
      setErrorMessage(false);
      // We may have to do more error handling bizz.
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserName: username,
          UserPass: password,
          UserDisplayName: userDisplayName,
        }),
      };
      fetch("http://127.0.0.1:5000/add_user", requestOptions).then(
        (response) => {
          if (response.status >= 404) {
            setErrorMessage(true);
            throw new Error("Server responded with an error");
          }
          return response.json();
        }
      );
      navigate("/");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    //create a card with a username and password field
    <div className="login-page">
      <Form>
        {!errorMessage ? (
          <div></div>
        ) : (
          <div className="error-message">passwords do not match</div>
        )}
        {!emptyFields ? (
          <div></div>
        ) : (
          <div className="error-message">Please fill out all text-fields</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
          <Form.Text className="text-muted">Username Must Be Unique</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserDisplayName">
          <Form.Label>Gamer Tag</Form.Label>
          <Form.Control type="username" placeholder="Enter Gamer Tag" />
          <Form.Text className="text-muted">
            This is how your name will be displayed!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className="btnGroup">
          {/* <Button className='submitBtn' variant="primary" type="submit"  onClick={() => {navigate("/HomePage")}}> Submit </Button>  */}
          <Button
            className="newAccountBtn"
            variant="secondary"
            onClick={() => {
              signInCheck();
            }}
          >
            {" "}
            Create New Account{" "}
          </Button>
        </div>
      </Form>
      <button
        className="backToLoginPageBtn hover:text-slate-400"
        onClick={() => {
          navigate("/LoginPage");
        }}
      >
        back to log-in
      </button>
    </div>
  );
};

export default LoginPage;
