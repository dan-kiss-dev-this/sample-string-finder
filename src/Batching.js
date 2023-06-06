import React, { useState } from 'react'

export default function Batching() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            {/* pass in previous state for correct update */}
            <button
                onClick={() => {
                    setNumber(n => n + 1);
                    setNumber(n => n + 1);
                    setNumber(n => n + 1);
                }}
            >
                +3
            </button>
        </>
    );
}