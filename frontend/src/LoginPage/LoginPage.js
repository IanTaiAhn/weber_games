import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO Don't allow a blank login.
const LoginPage = ({ Users }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, checkUser] = useState("");
  // const [userPass, checkPass] = useState("");

  let navigate = useNavigate();

  const handleInputs = () => {
    checkUser((userField, passField) => {
      userField = document.getElementById("formBasicUserName").value;
      passField = document.getElementById("formBasicPassword").value;

      Users.map((el) => {
        if (el.UserName === userField && el.UserPass === passField) {
          // Get the correcct id? so that we can grab the correct gamer tag.
          console.log(el.UserDisplayName);
          // Correct login
          localStorage.setItem("UserDisplayName", el.UserDisplayName);
          navigate("/");
        } else {
          // incorrect login
          console.log("incorrect");
          setErrorMessage(true);
        }
      });
    });
  };
  return (
    //create a card with a username and password field
    <>
      <div className="login-page">
        <div className="login-form">
          <h2 className="Header">LogIn Page</h2>
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
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
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
      </div>
    </>
  );
};

export default LoginPage;
