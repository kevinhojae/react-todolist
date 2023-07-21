import React, { useState } from "react";

import logo from "./assets/logo.svg";
import "./style/App.css";
import CreateTodo from "./components/CreateTodo";
import TodoListContainer from "./components/TodoListContainer";
import Todo from "./model/todo";

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

  const handleUpdateTodo = (id, task) => {
    todoListService.updateTodo(id, task);
  };

  const handleCompleteToggle = (id) => {
    todoListService.handleCompleteToggle(id);
  };

  return (
    <>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">ToDo List</h1>
      </header>
      <CreateTodo onAddTodo={setTodoList} />
      <TodoListContainer todoList={todoList} updateTodolist={setTodoList} />
    </>
  );
}

export default App;
