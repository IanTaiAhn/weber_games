import React, { useState } from 'react';

const GuessLetter = () => {
    const [state, setState] = useState('');
    let word = 'apples'
    
    // If letter is in the word, then it displays.
    // Next step is to save the letter, 
    // and have it display into its proper place when correct guess occurs.
    const handler = (event) => {
      console.log(word.includes(event.key))
      if (word.includes(event.key)) {
          setState(event.key);
      }
    };
      
    return (
      <div>
        <p>Key pressed is: {state}</p>  

        {/* Both ways work, but idk which one is better? */}
        {/* <input type="text" onKeyPress={(e) => handler(e)} /> */}
        <input type="text" onKeyPress={handler} />
      </div>
    );
  };
 
export default GuessLetter;