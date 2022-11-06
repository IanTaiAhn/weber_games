// import React, { useState, useEffect } from 'react'
import Header from "./header";
import Screen from "./screen";
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
      {/* <Screen /> */}
      <GuessLetter selectedWord={selectedWord} />
    </div>
  );
}

export default Main;
