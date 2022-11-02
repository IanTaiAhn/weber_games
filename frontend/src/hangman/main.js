import React, { useState, useEffect } from 'react'
import Header from "./header"
import RowOne from "./rowOne"
import Screen from './screen'

function Main() {
  const [prevState, setState] = useState(0)

  useEffect(() => {
    console.log('effect has taken place')
  }, [decCount]);

  function incCount() {
    setState(prevCount => prevCount - 1)
  }
  
  function decCount() {
    setState(prevCount => prevCount + 1)
  }

  return (
    <div>
      <Header title="HangmanReact"/>

      <Screen/>

      <RowOne/>

        <button onClick={incCount}>-</button>
            <span>{prevState}</span>
        <button onClick={decCount}>+</button>
    </div>
  );
}

export default Main