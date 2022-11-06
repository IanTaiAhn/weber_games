import Header from "./header";
import GuessLetter from "./guessLetter";

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
      <GuessLetter selectedWord={selectedWord} />
    </div>
  );
}

export default Main;
