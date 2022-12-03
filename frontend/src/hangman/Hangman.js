import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

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
  const [errorMessage, setErrorMessage] = useState(false);
  const [saveScore, setLoader] = useState("Record Score?");
  const [hover, disablePointer] = useState("");

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
    }
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const listItems = letters.split("").map((letter, i) => (
    <button
      className={`p-2 transition-all bg-indigo-300 hover:bg-slate-700 hover:text-white hover:scale-110 ${keyboard}`}
      key={i}
      value={letter}
      onClick={handleInput}
      disabled={letterSet.has(letter)}
    >
      {letter}
    </button>
  ));

  console.log(localStorage.getItem("UserDisplayName"));
  function recordScore() {
    setLoader((prevState) => <BarLoader />);
    disablePointer((prevState) => "pointer-events-none");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserDisplayName:
          localStorage.length === 0
            ? "guest"
            : localStorage.getItem("UserDisplayName"),
        GuessedWord: selectedWord,
        Tries: mistakeCount,
        TotalWins: 0,
        // TODO, Need to figure out how to query specific fields.
      }),
    };
    fetch("http://127.0.0.1:5000/add_hangman_stat", requestOptions).then(
      (response) => {
        if (response.status >= 404) {
          setErrorMessage(true);
          throw new Error("Server responded with an error");
        }
        return response.json();
      }
    );
    setTimeout(window.location.reload.bind(window.location), 4000);
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="container mx-auto border-2 border-indigo-600 mt-20">
      <div className="flex flex-column p-10">
        <h2>Guess the word in under 8 tries!</h2>
        <div className="flex flex-row gap-x-4 text-3xl self-center p-10">
          {correctLetters}
        </div>
        {lose ? (
          <p className="text-4xl self-center">You've Lost!</p>
        ) : (
          <div
            className={`flex flex-row space-x-4 self-center p-10 ${keyboard}`}
          >
            {listItems}
          </div>
        )}
        {win ? <p className="text-4xl self-center">You've Won!</p> : ""}
        <p className="text-2xl p-6">Mistakes: {mistakeCount}</p>
        {win ? (
          <button
            onClick={recordScore}
            className={`p-4 border-2 self-center border-indigo-400 max-w-sm transition-all hover:bg-slate-400 hover:scale-x-110 ${hover}`}
          >
            {saveScore}
          </button>
        ) : (
          ""
        )}
        {lose ? (
          <button
            onClick={refreshPage}
            className="p-4 border-2 self-center border-indigo-400 max-w-sm transition-all hover:bg-slate-400 hover:scale-x-110"
          >
            Play Again?
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Hangman;
