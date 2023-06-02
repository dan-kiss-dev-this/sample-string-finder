import React, { useState } from 'react';
import findLongestString from './findLongestString.js';

const Finder = () => {
    const [string, setString] = useState("")
    const [longestString, setLongestString] = useState("")

    return (
        <div>
            <input onChange={(e) => setString(e.target.value)} value={string} />
            <button onClick={() => setLongestString(findLongestString(string))}>Click to calculate longest string with no repeating values</button>
            {longestString}
        </div>
    )
}

export default Finder