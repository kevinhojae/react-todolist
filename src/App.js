import React, { useReducer, useState } from "react";

import logo from "./assets/logo.svg";
import "./style/App.css";
import CreateTodo from "./components/CreateTodo";
import FilterButtonRow from "./components/FilterButtonRow";
import TodoList from "./components/TodoList";
import CountTodo from "./components/CountTodo";
import TodoListContainer from "./components/TodoListContainer";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          isChecked: action.isChecked,
        }),
        count: {
          ...state.count,
          notdone: state.count.notdone + 1,
        },
      };
    case "SAVE-EDIT":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        count: {
          done: action.isChecked ? state.count.done - 1 : state.count.done,
          notdone: action.isChecked
            ? state.count.notdone
            : state.count.notdone - 1,
        },
      };
    case "CLICK-CHECKBOX":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, isChecked: action.isChecked }
            : todo
        ),
        count: {
          done: action.isChecked ? state.count.done + 1 : state.count.done - 1,
          notdone: action.isChecked
            ? state.count.notdone - 1
            : state.count.notdone + 1,
        },
      };
    default:
      return state;
  }
}

export const TodoContext = React.createContext(null);

export const FILTER_OPTION = {
  ALL: "ALL",
  NOT_DONE: "NOT_DONE",
  COMPLETED: "COMPLETED",
};

// 1. actions / states 들을 최상단에서 관리하는 가장 basic style
// 2. UI / Presenter / Service separation of concern
function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <CreateTodo onAddTodo={setTodoList} />
      <TodoListContainer todoList={todoList} />

      {/* <CountTodo count={count} /> */}
    </>
  );
}

export default App;
