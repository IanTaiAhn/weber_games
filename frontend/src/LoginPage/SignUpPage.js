import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Integrate insertion into database upon receiving the new account credentials.
const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  let signInCheck = () => {
    let username = document.getElementById("formBasicUsername").value;
    let password = document.getElementById("formBasicPassword").value;
    let password2 = document.getElementById("formBasicPassword2").value;
    // if (username === "test" && password === "test") {
    //     navigate("/HomePage");
    // }
    if (password === password2) {
      setErrorMessage(false);
      navigate("/HomePage");
    } else {
      setErrorMessage(true);
    }
  };

  let navigate = useNavigate();

  return (
    //create a card with a username and password field
    <div className="login-page">
      <Form>
        {!errorMessage ? (
          <div></div>
        ) : (
          <div className="error-message">passwords do not match</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
          <Form.Text className="text-muted">Username Must Be Unique</Form.Text>
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
        className="backToLoginPageBtn"
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
