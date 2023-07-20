import React, { useRef, useState } from "react";

const CreateTodo = ({ onAddTodo }) => {
  const idRef = useRef(0);

  const [todo, setTodo] = useState({
    id: idRef.current,
    task: "",
    completed: false,
  });

  const handleAddTodo = () => {
    onAddTodo((prev) => [...prev, todo]);
    idRef.current++;
  };

  return (
    <div className="todo-input">
      <input
        type="input-text"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setTodo((prev) => ({ ...prev, task: e.target.value }))}
        value={todo.task}
      />
      <button className="create-todo" onClick={handleAddTodo}>
        추가
      </button>
    </div>
  );
};

export default CreateTodo;
