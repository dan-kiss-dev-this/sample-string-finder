import React, { useState } from "react";

function Increment(props) {
    const { initialValue } = props;
    const [count, setCount] = useState(initialValue);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Increment;