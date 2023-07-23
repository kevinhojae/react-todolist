import React, { useState } from "react";

const CreateTodo = ({ onAddTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    onAddTodo(todoInput);
    setTodoInput("");
  };

  return (
    <div className="todo-input">
      <input
        type="input-text"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <button className="create-todo" onClick={handleAddTodo}>
        추가
      </button>
    </div>
  );
};

export default CreateTodo;
