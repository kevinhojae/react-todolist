import React, { useState } from "react";

import logo from "./assets/logo.svg";
import "./style/App.css";
import CreateTodo from "./components/CreateTodo";
import TodoListContainer from "./components/TodoListContainer";

export const TodoContext = React.createContext(null);

export const FILTER_OPTION = {
  ALL: "ALL",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};

// 1. actions / states 들을 최상단에서 관리하는 가장 basic style
// 2. UI / Presenter / Service separation of concern
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState({
    completed: 0,
    notCompleted: 0,
  });

  return (
    <>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">ToDo List</h1>
      </header>
      <CreateTodo onAddTodo={setTodoList} onAddCount={setTodoCount} />
      <TodoListContainer
        todoList={todoList}
        todoCount={todoCount}
        updateTodolist={setTodoList}
        updateCount={setTodoCount}
      />
    </>
  );
}

export default App;
