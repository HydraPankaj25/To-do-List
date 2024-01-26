import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Todo } from './MyComponents/Todo';
import { About } from './MyComponents/About';
// to delete our object Array we need to inport useState
import React, { useState, useEffect } from 'react';
import { Addtodo } from './MyComponents/Addtodo';

//importing routes 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if (!localStorage.getItem('todos')) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const addtodo = (title, desc) => {
    console.log("I am adding todo", todos);
    let sno
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      des: desc
    }

    // current can be any parameter
    settodos((current) => [...current, myTodo]);
  }

  const onDelete = (todo) => {
    console.log("I am on delete function ", todo);
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const [todos, settodos] = useState(initTodo);

  //setting item to add to local storage and using useeffect to avoid error
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="This is Title" />
        <Routes>
          <Route exact path="/" element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }></Route>
          <Route exact path="/about" element={<About />} />
        </Routes>

        {/* passing value to the props  */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
