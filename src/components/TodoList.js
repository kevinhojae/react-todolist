import Todo from "./TodoItem";
import React, { useContext } from "react";
import { TodoContext } from "../App";

const TodoList = ({
  filteredTodoList,
  updateTodo,
  removeTodo,
  completeTodo,
  editTodo,
}) => {
  const { todoList } = useContext(TodoContext);

  // Early Return
  if (todoList.length === 0) {
    return (
      <div className="box">
        <p className="empty-text">Well done!</p>
      </div>
    );
  }

  return (
    <div className="box">
      {filteredTodoList.map((todo) => (
        <Todo
          todo={todo} // 선택한 todo의 id를 이용하기 위해 Todo 컴포넌트에 todo를 전달
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
