import React, { useState } from "react";
import CorrectWord from "./correctWord";

const GuessLetter = ({ selectedWord }) => {
  const [letter, addLetter] = useState(new Set());
  const [word, showWord] = useState(selectedWord);

  // if we update the state, by iterating over our array, and finding where the correct letter is

  // const correctLetters = selectedWord.split("").map((letter, i) => (
  //   {letter[i]}
  // ));

  const handleInput = (e) => {
    let guessedLetter = e.target.value;
    if (selectedWord.includes(guessedLetter)) {
      addLetter(letter.add(guessedLetter));
      console.log(letter);
      //
      console.log(word.indexOf(guessedLetter));
      // console.log(word.cha)
      // word.forEach(element => {
      //   console.log()
      // });
    }
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const listItems = letters.split("").map((letter, i) => (
    // So we need this unique key prop for some reason
    <button
      className="p-2 bg-indigo-300 hover:bg-slate-700 hover:text-white"
      key={i}
      value={letter}
      onClick={handleInput}
    >
      {letter}
    </button>
  ));
  // console.log(correctLetters);
  return (
    <div className="container mx-auto">
      {/* <CorrectWord word={selectedWord} handler={letter} /> */}
      {/* <div>{correctLetters}</div> */}
      <div className="flex flex-row space-x-2">{listItems}</div>
    </div>
  );
};

export default GuessLetter;
