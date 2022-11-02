import React, { useState } from 'react';


const RowOne = () => {
    const [prevState, setState] = useState("")

    // Cool.
    let bool = true;
    function showChar() {
        // Need some logic to wheter or not the state will change.
        if (bool) {
            setState(noChar => noChar = 'What')

        }
      }

    return ( 
        <div>
            <p>{prevState}</p>
            <button onClick={showChar}></button>
            <button>
                Q
            </button>
            <button>
                W
            </button>
            <button>
                E
            </button>
            <button>
                R
            </button>
            <button>
                T
            </button>
            <button>
                Y
            </button>
            <button>
                U
            </button>
            <button>
                I
            </button>
            <button>
                O    
            </button>
            <button>
                P
            </button>
        </div>
     );
}
 
export default RowOne;