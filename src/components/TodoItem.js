import { useState, useRef, useEffect } from "react";

const Todo = ({ todo, updateTodo, removeTodo, completeTodo, editTodo }) => {
  const [todoInput, setTodoInput] = useState(todo.task);
  const isEditing = todo.getIsEditing();
  const editSpace = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editSpace.current.focus();
    }
  }, [isEditing]);

  // edit의 경우, 여러 개를 동시에 수정할 수 있어야 하므로 Todo component 내에서 관리
  // 👍🏻
  const handleEditClick = () => {
    editTodo(todo.id);
    console.log("start edit");
  };

  // 👍🏻// 👍🏻// 👍🏻// 👍🏻// 👍🏻// 👍🏻
  const handleSaveClick = () => {
    editTodo(todo.id);
    updateTodo(todo.id, todoInput);
    console.log("save edit");
  };

  return (
    <>
      <div className="todo">
        <input
          className="todo-check"
          type="checkbox"
          checked={todo.isCompleted}
          onClick={() => completeTodo(todo.id)}
          readOnly
        />
        {isEditing ? (
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            ref={editSpace}
          ></input>
        ) : (
          <p>{todo.task}</p>
        )}
        <button
          className="edit"
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? "📥" : "✏️"}
        </button>

        <button className="delete" onClick={() => removeTodo(todo.id)}>
          🗑️
        </button>
      </div>
    </>
  );
};
export default Todo;

/**
 *      {isEditing ? (
          <>
            <p>
              <input
                className="edit-text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                ref={editSpace}
              />
            </p>
            <button className="edit" onClick={handleSaveClick}>
              📥
            </button>
          </>
        ) : (
          <>
            <p className="todo-text">{todo.task}</p>
            <button className="edit" onClick={handleEditClick}>
              ✏️
            </button>
          </>
        )}
 */
