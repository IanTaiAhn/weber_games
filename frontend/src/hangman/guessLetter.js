import React, { useState } from "react";

// TODO Perhaps implement a wrong word bank.
const GuessLetter = ({ selectedWord }) => {
  const [letterSet, addLetter] = useState(new Set([]));
  const [correctLetters, showLetters] = useState(
    selectedWord
      .split("")
      .map((letter, i) => <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>)
  );
  const [mistakeCount, updateCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleInput = (e) => {
    let guessedLetter = e.target.value;
    if (selectedWord.includes(guessedLetter)) {
      addLetter(letterSet.add(guessedLetter));
      showLetters(
        selectedWord
          .split("")
          .map((letter, i) => (
            <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>
          ))
      );
    } else {
      updateCount((prevCount) => prevCount + 1);
      if (mistakeCount >= 7) {
        setDisable(true);
      }
    }
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const listItems = letters.split("").map((letter, i) => (
    <button
      className="p-2 bg-indigo-300 hover:bg-slate-700 hover:text-white"
      key={i}
      value={letter}
      onClick={handleInput}
      disabled={letterSet.has(letter)}
    >
      {letter}
    </button>
  ));
  return (
    <div className="container mx-auto">
      <h2>Guess the word in under 8 tries!</h2>
      <div className="flex flex-row gap-x-4 text-3xl">{correctLetters}</div>
      {disable ? (
        <p className="text-4xl">You're Done!</p>
      ) : (
        <div className="flex flex-row space-x-2">{listItems}</div>
      )}
      <div>
        <p className="text-xl">Mistakes: {mistakeCount}</p>
      </div>
    </div>
  );
};

export default GuessLetter;
