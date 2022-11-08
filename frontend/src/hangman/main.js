import Header from "./Header";
import Hangman from "./Hangman";
import { Link } from "react-router-dom";

const randomWords = [
  "apples",
  "pears",
  "java",
  "oranges",
  "coffee",
  "latte",
  "steak",
  "peaches",
  "delicious",
  "react",
];
let selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];

function Main() {
  console.log(selectedWord);
  return (
    <div>
      <Header title="HangmanReact" />
      <Hangman selectedWord={selectedWord} />
      <Link className="text-4xl text-black" to="/Menu">
        Menu
      </Link>
    </div>
  );
}

export default Main;
