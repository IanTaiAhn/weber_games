import React, { useState } from "react";

// TODO Perhaps implement a wrong word bank.
const Hangman = ({ selectedWord }) => {
  const [letterSet, addLetter] = useState(new Set([]));
  const [correctLetters, showLetters] = useState(
    selectedWord
      .split("")
      .map((letter, i) => <p key={i}>{letterSet.has(letter) ? letter : "_"}</p>)
  );
  const [mistakeCount, updateCount] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [correctLetterCount, updateCorrectLetterCount] = useState(1);
  const [keyboard, hideKeyboard] = useState("");
  const selectedWordLetterCount = new Set(selectedWord).size;

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
      updateCorrectLetterCount((prevLetterCount) => prevLetterCount + 1);
    } else {
      updateCount((prevCount) => prevCount + 1);
      if (mistakeCount >= 7) {
        setLose(true);
      }
    }
    if (correctLetterCount === selectedWordLetterCount) {
      setWin(true);
      hideKeyboard("hidden");
      // For hangman, lets just increment the number of times someone
      // has guessed a correct word, and how many mistakes they made.
    }
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const listItems = letters.split("").map((letter, i) => (
    <button
      className={`p-2 bg-indigo-300 hover:bg-slate-700 hover:text-white ${keyboard}`}
      key={i}
      value={letter}
      onClick={handleInput}
      disabled={letterSet.has(letter)}
    >
      {letter}
    </button>
  ));
  return (
    <div className="container mx-auto border-2 border-indigo-600 mt-16">
      <div className="flex flex-column p-10">
        <h2>Guess the word in under 8 tries!</h2>
        <div className="flex flex-row gap-x-4 text-3xl self-center p-10">
          {correctLetters}
        </div>
        {lose ? (
          <p className="text-4xl self-center">You've Lost!</p>
        ) : (
          <div
            className={`flex flex-row space-x-2 self-center p-10 ${keyboard}`}
          >
            {listItems}
          </div>
        )}
        {win ? <p className="text-4xl self-center">You've Won!</p> : ""}
        <p className="text-2xl p-6">Mistakes: {mistakeCount}</p>
      </div>
    </div>
  );
};

export default Hangman;
