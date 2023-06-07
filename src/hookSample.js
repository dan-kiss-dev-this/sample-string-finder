import React, { useState, useEffect } from 'react'
import { useCounter } from './HookCounter'

const HookSample = ({ onCountChange = () => { } }) => {
    const { count, increment, decrement } = useCounter()
  
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}


export default HookSample