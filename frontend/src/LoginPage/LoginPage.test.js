import React from "react";
import {
  findAllByAltText,
  findByText,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Ticket # and story name", () => {
  it("shold check that username and password exist", () => {
    render(<LoginPage />);
    screen.getByText("Username");
    screen.getByText("Password");
  });
  it("should check that the submit button works", () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByText("Submit"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/HomePage");
  });
  it("should check that the create a new account button works", () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByText("Create a new account"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/SignUpPage");
  });
  //check if the username and password fields exist and can be written in
  it("should check that the username and password fields exist and can be written in", () => {
    render(<LoginPage />);
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "test" } });
    expect(username.value).toBe("test");
    expect(password.value).toBe("test");
  });
});

describe("Ticket # and story name", () => {
  //it should check that SignUpPage renders
  it("should check that SignUpPage renders", () => {
    render(<SignUpPage />);
    screen.getByText("Username");
    screen.getByText("Password");
    screen.getByText("Re-enter Password");
  });
  //it should check that the username and password fields exist and can be written in
  it("should check that the username and password fields exist and can be written in", () => {
    render(<SignUpPage />);
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const password2 = screen.getByLabelText("Re-enter Password");
    fireEvent.change(username, { target: { value: "testUsername" } });
    fireEvent.change(password, { target: { value: "testPassword" } });
    fireEvent.change(password2, { target: { value: "testPassword2" } });
    expect(username.value).toBe("testUsername");
    expect(password.value).toBe("testPassword");
    expect(password2.value).toBe("testPassword2");
  });

  //it should check that the create new account button works
  it("should check that the create new account button works", () => {
    render(<SignUpPage />);
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const password2 = screen.getByLabelText("Re-enter Password");
    fireEvent.change(username, { target: { value: "testUsername" } });
    fireEvent.change(password, { target: { value: "testPassword" } });
    fireEvent.change(password2, { target: { value: "testPassword" } });
    fireEvent.click(screen.getByText("Create New Account"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/HomePage");
  });
  //it should check that passwords do not match
  it("should check that passwords do not match", () => {
    render(<SignUpPage />);
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const password2 = screen.getByLabelText("Re-enter Password");
    fireEvent.change(username, { target: { value: "testUsername" } });
    fireEvent.change(password, { target: { value: "testPassword" } });
    fireEvent.change(password2, { target: { value: "testPassword2" } });
    fireEvent.click(screen.getByText("Create New Account"));
    screen.getByText("passwords do not match");
    // expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/HomePage");
  });
  //it should check that the back to log-in button sends you back to log-in page
  it("should check that the back to log-in button sends you back to log-in page", () => {
    render(<SignUpPage />);
    fireEvent.click(screen.getByText("back to log-in"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/LoginPage");
  });
});
