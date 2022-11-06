import React, { useState } from "react";
import CorrectWord from "./correctWord";

const GuessLetter = ({ selectedWord }) => {
  const [letterSet, addLetter] = useState(new Set([]));
  const [correctLetters, showLetters] = useState(
    selectedWord
      .split("")
      .map((letter, i) => <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>)
  );

  const handleInput = (e) => {
    let guessedLetter = e.target.value;
    if (selectedWord.includes(guessedLetter)) {
      addLetter(letterSet.add(guessedLetter));

      // correctLetters.map((letter) => (letterSet.has(letter) ? letter : "_"));

      // showLetters((oldArr) => [
      //   ...oldArr,
      //   letterSet.has(guessedLetter) ? guessedLetter : "_",
      // ]);

      // const correctLetters = selectedWord
      //   .split("")
      //   .map((letter) => (letterSet.has(letter) ? letter : "_"));

      // showLetters((prevArr) => [
      //   ...prevArr,
      //   letterSet.has(guessedLetter) ? guessedLetter : "_",
      // ]);

      showLetters(
        selectedWord
          .split("")
          .map((letter, i) => (
            <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>
          ))
      );

      // correctLetters = selectedWord
      //   .split("")
      //   .map((letter, i) => (
      //     <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>
      //   ));
      // showLetters(selectedWord.includes(guessedLetter));
      console.log(letterSet);
      console.log(correctLetters);
    }
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const listItems = letters.split("").map((letter, i) => (
    <button
      className="p-2 bg-indigo-300 hover:bg-slate-700 hover:text-white"
      key={i}
      value={letter}
      onClick={handleInput}
    >
      {letter}
    </button>
  ));
  return (
    <div className="container mx-auto">
      {/* <CorrectWord word={selectedWord} handler={letter} /> */}
      <div>{correctLetters}</div>
      <div className="flex flex-row space-x-2">{listItems}</div>
    </div>
  );
};

export default GuessLetter;
