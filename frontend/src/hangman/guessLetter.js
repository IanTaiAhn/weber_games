import React, { useState } from 'react';

const GuessLetter = () => {
  const [state, setState] = useState([]);
  // Will refactor this, and probably pass in values from the main componenet into here as a prop.

  // temporary solution
  let word = 'apples';

  // const handler = (event) => {
  //     setState(event.key);
  // }

  const handleInput = (e) => {
    // Do a simple if statement here now and loop through the word.
    let letter = e.target.value;
    if (word.includes(letter))  {
      setState(state + letter);
    }
    console.log(letter);

  }

  // Damn react is actually really cool!
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const listItems = letters.split('').map((letter, i) =>
  // So we need this unique key prop for some reason
    <button 
      key={i} 
      value={letter} 
      onClick={handleInput}
    >
      {letter}
    </button>
    
    );
    return (
      <div>
        <p>Key pressed is: {state}</p>  
        {/* <input type="text" onKeyPress={handler} /> */}
        <div>{listItems}</div>
      </div>
    );
  };
 
export default GuessLetter;