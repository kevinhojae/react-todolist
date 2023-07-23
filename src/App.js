import React, { useState } from "react";

import logo from "./assets/logo.svg";
import "./style/App.css";
import CreateTodo from "./components/CreateTodo";
import TodoListContainer from "./components/TodoListContainer";
import Todo from "./model/todo";
import CountTodo from "./components/CountTodo";

export const TodoContext = React.createContext(null);

export const FILTER_OPTION = {
  ALL: "ALL",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};

function App({ todoListService }) {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (task) => {
    const newTodo = new Todo(task);
    todoListService.addTodo(newTodo, setTodoList);
  };

  const handleRemoveTodo = (id) => {
    todoListService.removeTodo(todoList, id, setTodoList);
  };

  const handleUpdateTodo = (id, task) => {
    todoListService.updateTodo(todoList, id, task, setTodoList);
  };

  const handleCompleteToggle = (id) => {
    todoListService.completeTodo(todoList, id, setTodoList);
  };

  const handleEditToggle = (id) => {
    todoListService.editTodo(todoList, id, setTodoList);
  };

  return (
    <TodoContext.Provider value={{ todoList }}>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">ToDo List</h1>
      </header>
      <CreateTodo onAddTodo={handleAddTodo} />
      <TodoListContainer
        updateTodo={handleUpdateTodo}
        removeTodo={handleRemoveTodo}
        completeTodo={handleCompleteToggle}
        editTodo={handleEditToggle}
      />
      <CountTodo />
    </TodoContext.Provider>
  );
}

export default App;
