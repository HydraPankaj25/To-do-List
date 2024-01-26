import React from 'react'

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className='container'>
      <h4>{todo.title}</h4>
      <p>{todo.des}</p>
      <button className='btn btn-danger' onClick={() => { onDelete(todo) }}>DELETE</button>
      <hr />
    </div>
  )
}
