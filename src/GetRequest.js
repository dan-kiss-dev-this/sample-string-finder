import React, { useState, useEffect } from 'react'

const GetRequest = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(json => json.json()).then(data => setData(data))
  }, [])

  return (
    <div>{data ? data.title : 'No Data'}</div>
  )
}

export default GetRequest