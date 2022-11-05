import React, { useState } from 'react';




const GuessLetter = () => {
    const [state, setState] = useState([]);

    const handler = (event) => {
      setState(event.key);
  }

  const handleInput = (e) => {
    let letter = e.target.value;
    setState(state + letter);
    console.log(letter);

  }

  // Damn react is actually really cool!
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const listItems = letters.split('').map((letter, i) =>
  // So we need this unique key prop for some reason
    <button key={i} value={letter} onClick={handleInput}>
      {letter}
    </button>
    
    );
    return (
      <div>
        <p>Key pressed is: {state}</p>  
        <input type="text" onKeyPress={handler} />
        <div>{listItems}</div>
      </div>
    );
  };
 
export default GuessLetter;