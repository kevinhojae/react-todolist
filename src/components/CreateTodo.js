import React, { useRef, useState } from "react";

const CreateTodo = ({ onAddTodo }) => {
  const idRef = useRef(0);

  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    onAddTodo((prev) =>
      prev.concat({ id: idRef.current, task: todoInput, isCompleted: false })
    );
    idRef.current += 1;
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
