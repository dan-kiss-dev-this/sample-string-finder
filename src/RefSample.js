import React, { useRef } from 'react'

const RefSample = () => {
    const myBtn = useRef(null)
    const clickIt = () => {
        console.log(66, myBtn.current)
        myBtn.current.click()
    }
    return (
        <div ref={myBtn} onClick={clickIt}>RefSample</div>
    )
}

export default RefSample