import React, { useState } from "react";

const GuessLetter = () => {
  const [state, setState] = useState([]);
  // Will refactor this, and probably pass in values from the main componenet into here as a prop.
  let word = "apples";

  const handleInput = (e) => {
    // Do a simple if statement here now and loop through the word.
    let letter = e.target.value;
    if (word.includes(letter)) {
      setState(state + letter);
    }
    console.log(letter);
  };

  function createKeyboard() {
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
    return listItems;
  }
  const keyboard = createKeyboard();

  return (
    <div className="container mx-auto">
      <p>Letter is in word: {state}</p>
      <div className="flex flex-row space-x-2">{keyboard}</div>
    </div>
  );
};

export default GuessLetter;
