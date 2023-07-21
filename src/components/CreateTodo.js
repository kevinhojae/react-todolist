import React, { useRef, useState } from "react";

const CreateTodo = ({ onAddTodo, onAddCount }) => {
  const idRef = useRef(0);

  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    onAddTodo((prev) => prev.concat({ id: idRef.current, task: todoInput }));
    onAddCount((prev) => {
      return { ...prev, notCompleted: prev.count + 1 };
    });
    idRef.current += 1;
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
