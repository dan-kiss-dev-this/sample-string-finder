import React, { useCallback, useState } from 'react'

const useCopyToClipboard = (content) => {
    const [isCopied, setIsCopied] = useState(false)

    const copy = useCallback(() => {
        navigator.clipboard
            .writeText(content)
            .then(() => setIsCopied(true))
            .then(() => setTimeout(() => setIsCopied(false), 1250))
            .catch((err) => alert(err))
    }, [content])

    return [isCopied, copy]
}

const Clipboard = () => {
    const [isCopied, copy] = useCopyToClipboard('Text to copy')
    return (
        <div onClick={copy}>{isCopied ? 'Copied' : 'Copy'} {copy}</div>
    )
}

export default Clipboard