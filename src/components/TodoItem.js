import { useState, useRef, useEffect } from "react";

const Todo = ({ todo, onClickCheckbox, onDelete, updateTodolist }) => {
  const [todoInput, setTodoInput] = useState(todo.task);

  const [isEditing, setIsEditing] = useState(false);
  const editSpace = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editSpace.current.focus();
    }
  }, [isEditing]);

  // edit의 경우, 여러 개를 동시에 수정할 수 있어야 하므로 Todo component 내에서 관리
  const handleStartEdit = () => {
    setIsEditing(true);
    console.log("start edit");
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    updateTodolist((prevTodolist) =>
      prevTodolist.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, task: todoInput } : prevTodo,
      ),
    );
    console.log("save edit");
  };

  return (
    <>
      <div className="todo">
        <input
          className="todo-check"
          type="checkbox"
          checked={todo.isCompleted}
          onClick={() => onClickCheckbox(todo)}
          readOnly
        />
        {isEditing ? (
          <>
            <p>
              <input
                className="edit-text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                ref={editSpace}
              />
            </p>
            <button className="edit" onClick={handleSaveEdit}>
              📥
            </button>
          </>
        ) : (
          <>
            <p className="todo-text">{todo.task}</p>
            <button className="edit" onClick={handleStartEdit}>
              ✏️
            </button>
          </>
        )}
        <button className="delete" onClick={() => onDelete(todo)}>
          🗑️
        </button>
      </div>
    </>
  );
};
export default Todo;
