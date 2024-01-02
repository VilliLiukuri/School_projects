import React, { useState } from 'react';
import './App.css';
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = text => ({ type: ADD_TODO, text, id: Math.random() });
const removeTodo = id => ({ type: REMOVE_TODO, id });

function todosReducer(state = { todos:[] }, action)  {
  switch (action.type) {
    case ADD_TODO: 
      return { 
        ...state, 
        todos: [...state.todos, {text: action.text, id: action.id}]
      };
    case REMOVE_TODO:
      const newTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state, 
        todos: newTodos
      };
    default: return state;
  }
}

function Banner() {
  return <h1>Todotottodoo</h1>;
}

function ToDoFormAndList() {
  const [itemText, setItemText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(itemText));
    setItemText("");
  };

  const removeItem = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={itemText} onChange={event => setItemText(event.target.value)} placeholder="Write a new todo here" />
        <input type='submit' value='Add'/>
      </form>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text+" "} <span onClick={() => removeItem(item.id)}> x </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


function App() {

  const store = createStore(todosReducer)

  return (
    <div>
      <Provider store={store}>
        <Banner/>
        <ToDoFormAndList/>
      </Provider>
  </div>
  );
}

export default App;