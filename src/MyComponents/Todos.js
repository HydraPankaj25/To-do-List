import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 my='3'><center>Works List</center></h3>
      {props.todos.length == 0 ? "No List of Works To deisplay" :
        props.todos.map((list) => {
          // for multiple things we have to do this 
          return (
            <>
              <Todo todo={list} key={list.sno} onDelete={props.onDelete} />
            </>
          )
        })
      }
    </div>
  )
}
