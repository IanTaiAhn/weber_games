import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO Go through the database, and check if username, or password matches database data.
const LoginPage = ({ UserName, Password }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, checkUser] = useState("");
  const [password, checkPass] = useState("");

  let navigate = useNavigate();

  // We need to iterate through the database, but this is for testing purposes now.
  const handleInputs = () => {
    checkUser((prevUser, prevPass) => {
      prevUser = document.getElementById("formBasicUserName").value;
      prevPass = document.getElementById("formBasicPassword").value;
      // console.log(prevPass);
      if (prevUser === UserName && prevPass === Password) {
        console.log("matches");
        // Take us to home page with games, and we need to make sure our account stays logged in somehow?
        // We need to have an active state or something that keeps the user logged in.
        // We will also need to pass a prop from child back to parent, and use that to display their
        // user name in the HomePage.
        navigate("/HomePage");
      } else {
        // We go back to the loggin page with an error message.
        console.log("incorrect");
        setErrorMessage(true);
      }
    });
  };
  return (
    //create a card with a username and password field
    <div className="login-page">
      <Form>
        {!errorMessage ? (
          <div></div>
        ) : (
          <div className="error-message">Incorrect login credentials</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="user" placeholder="Enter username" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className="btnGroup">
          <Button
            className="submitBtn"
            variant="primary"
            // type={errorMessage ? "aa" : "submit"}
            onClick={handleInputs}
          >
            {" "}
            Submit{" "}
          </Button>
          <Button
            className="newAccountBtn"
            variant="secondary"
            onClick={() => {
              navigate("/SignUpPage");
            }}
          >
            {" "}
            Create a new account{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
