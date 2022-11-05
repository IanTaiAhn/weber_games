import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  let navigate = useNavigate();

  return (
    //create a card with a username and password field
    <div className="login-page">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
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
            type="submit"
            onClick={() => {
              navigate("/HomePage");
            }}
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
