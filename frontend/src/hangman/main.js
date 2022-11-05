import React, { useState, useEffect } from 'react'
import Header from "./header"
import Screen from './screen'
import GuessLetter from './guessLetter'

function Main() {

  // Syntax Helpers
  // const [prevState, setState] = useState(0)
  // useEffect(() => {
  //   console.log('effect has taken place')
  // }, [decCount]);
  // function incCount() {
  //   setState(prevCount => prevCount - 1)
  // }
  // function decCount() {
  //   setState(prevCount => prevCount + 1)
  // }
  

  return (
    <div>
      <Header title="HangmanReact"/>
      <Screen/>
      <GuessLetter/>

        {/* Syntax Helpers */}
        {/* <button onClick={incCount}>-</button>
            <span>{prevState}</span>
        <button onClick={decCount}>+</button> */}
    </div>
  );
}

export default Main