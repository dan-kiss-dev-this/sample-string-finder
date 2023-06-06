import React, { useState, useEffect } from 'react'

// custom hook
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebuncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebuncedValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])

    return debouncedValue
}

//example
const Counter = () => {
    const [value, setValue] = useState(0)
    const lastValue = useDebounce(value, 1000)

    return (
        <div>
            <p>Current Value {value}, Debounced Value {lastValue}</p>
            <button onClick={() => { setValue(value + 1) }}>Increment</button>
        </div>
    )
}

export default Counter