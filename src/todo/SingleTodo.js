import React, { useState } from 'react'

const SingleTodo = ({ todo, removeTodo, editTodo }) => {
    //todo done
    const { title, description, priority, done, id } = todo

    return (
        <div className="todo">
            <input value={title} onChange={e => editTodo({ id, done, title: e.target.value, description, priority: priority })} />
            <input value={description} onChange={e => editTodo({ id, done, title, description: e.target.value, priority: priority })} />
            <input value={priority} onChange={e => editTodo({ id, done, title, description, priority: e.target.value })} />


            <span>Done - {done}</span>
          
            <button onClick={() => removeTodo(id)}>Removed</button>
        </div>
    )
}

export default SingleTodo