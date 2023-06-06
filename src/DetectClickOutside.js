import React, { useState, useEffect, useRef } from 'react'

const DetectClickOutside = () => {
    const clickMeDivRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!clickMeDivRef?.current?.contains(event.target)) {
                alert("You clicked outside of me!")
            }
        }

        //Bind  the event listener
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            // unbind the event listener to clean up
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [clickMeDivRef])
    return (
        <div ref={clickMeDivRef}>clicked me?</div>
    )
}

export default DetectClickOutside;