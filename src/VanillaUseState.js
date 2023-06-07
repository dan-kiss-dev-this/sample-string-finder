
import React, { useState, useEffect, useReducer } from "react";
export default function useStateVanilla(initialState = 0) {
    //function to force a re-render
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    //make a useState hook in vanilla javascript
    let state = initialState;
    function setState(newState = 2) {
        state = newState;
        // function to re-render the component
        forceUpdate();
    }



    return [state, setState];
}
