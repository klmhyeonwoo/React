import React, { useReducer, useState } from 'react'

export default function Reducer() {
    const initialState = {count : 0};

    function reducer(state, action) {
      switch(action.type) {
        case 'reset':
          return initialState;
        case 'decrement':
            return { count : state.count - 1}
        case 'increment':
            return { count : state.count + 1 };
        default:
          throw new Error();
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        Count : {state.count}
        <button onClick={() => dispatch({type: 'increment'})}> + </button>
        <button onClick={() => dispatch({type: 'decrement'})}> - </button>
        <button onClick={() => dispatch({type: 'reset'})}> reset </button>
    </div>
  )
}
