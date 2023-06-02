import react, { useState, useEffect } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("side effect occured that useEffect is listening for such as a state change.")
    })

    const handleCount = () => { setCount(count + 1) }

    return (
        <div className="container">
            <div className="countSpan">Count is {count}</div>
            <button onClick={handleCount}>Increment count</button>
            <div>placeholder</div>
        </div>
    )
}

export default Counter;