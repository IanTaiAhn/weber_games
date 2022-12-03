import React from "react";
import {
  findAllByAltText,
  findByText,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import MenuPage from "../Menu/Menu";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Ticket# ZZ3750-16 as a user, I want to have the piggy game save the data to the backend after a win, so that we can track on a leaderboard.", () => {
  it("Render all 3 games", () => {
    render(<MenuPage />);
    screen.getByText("Hangman");
    screen.getByText("Piggies!");
    screen.getByText("Epic Sauce");
  });
  it("should check that the hangman button works", () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByText("Hangman"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/hangman");
  });
  it("should check that the piggies button works", () => {
    render(<MenuPage />);
    expect(screen.getByText("Piggies!").closest("a")).toHaveAttribute(
      "href",
      "/piggy_game/piggy.html"
    );
  });
});
