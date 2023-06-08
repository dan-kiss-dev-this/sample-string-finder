import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

const FullTodo = () => {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(0)

    const addTodo = () => {
        setCount(prev => prev + 1)
        setTodos([...todos, { title, description, priority, id: count, done: false }])
        setTitle('')
        setDescription('')
        setPriority(0)
    }

    const editTodo = singleTodo => {
        console.log(21, singleTodo)
        const index = todos.findIndex(todo => todo.id === singleTodo.id)
        console.log(23, index)
        // const newArray = [...todos.splice(index, 1, singleTodo)]
        const newArray = [...todos]
        newArray.splice(index, 1, singleTodo)
        console.log(28, newArray)
        setTodos(newArray)
    }

    const removeTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id)
        const newArray = [...todos]
        newArray.splice(index, 1)
        setTodos(newArray)
    }

    console.log(32, todos)

    return (
        <div className="todos">
            <div>Todo List</div>
            <div>
                <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder="priority" value={priority} onChange={e => setPriority(e.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            {todos.map((todo, index) => <SingleTodo todo={todo} removeTodo={removeTodo} editTodo={editTodo} key={todo.id} />)}
        </div>
    )
}

export default FullTodo