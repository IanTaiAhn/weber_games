import React from "react";
import {
  findAllByAltText,
  findByText,
  getByText,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import NavBar from "./Navbar.js";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Ticket# ZZ3750-16 as a user, when I click leaderboard I want to see the leaderboard page", () => {
  it("Render all 3 games", () => {
    render(<NavBar />);
    screen.getByText("Menu");
    screen.getByText("Leaderboard");
    screen.getByText("Login");
    screen.getByText("Weber Games");
  });
  it("should check that the menu button works", () => {
    render(<NavBar />);
    expect(screen.getByText("Menu").closest("a")).toHaveAttribute(
      "href",
      "/Menu"
    );
  });
  it("should check that the leaderboard button works", () => {
    render(<NavBar />);
    expect(screen.getByText("Leaderboard").closest("a")).toHaveAttribute(
      "href",
      "/Server"
    );
  });
  it("should check that the logout button works", () => {
    render(<NavBar />);
    expect(screen.getByText("Login").closest("a")).toHaveAttribute(
      "href",
      "/LoginPage"
    );
  });
  it("should check that the weber games button works", () => {
    render(<NavBar />);
    expect(screen.getByText("Weber Games").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
