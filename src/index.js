import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoListService from "./services/todo-list.service";

const root = ReactDOM.createRoot(document.getElementById("root"));

const todoListService = new TodoListService();

root.render(
  <React.StrictMode>
    <App todoListService={todoListService} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
