import React, { useEffect, useState } from 'react'

const PostRequest = () => {
    const [post, setPost] = useState(null)
    useEffect(() => {
        const makePost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'supdk',
                    body: 'bar',
                    userId: 1
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }

            })
            const data = await response.json()
            return data
        }

        const addPost = async (data) => {
            setPost(data)
        }

        const handlePost = async () => {
            const response = await makePost()
            addPost(response)
        }

        handlePost()
    }, [])
    return (
        <div> Title: {post?.title}</div>
    )
}

export default PostRequest