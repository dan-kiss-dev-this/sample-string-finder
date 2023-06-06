import React, { useEffect, useRef } from 'react'

const FocusOnMount = () => {
    const myRef = useRef(null)

    useEffect((
    ) => {
        // focus on mount
        myRef?.current?.focus()
    }, [myRef])
    return (
        <input ref={myRef} />
    )
}

export default FocusOnMount