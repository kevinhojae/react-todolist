import { useState, useRef, useEffect } from "react";

const Todo = ({ todo, onUpdateTodolist, onUpdateCount }) => {
  const [todoInput, setTodoInput] = useState(todo.task);

  const [isEditing, setIsEditing] = useState(false);
  const editSpace = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editSpace.current.focus();
    }
  }, [isEditing]);

  const handleClickCheckbox = () => {
    onUpdateTodolist((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...prevTodo, completed: todo.completed }
          : prevTodo,
      ),
    );
    onUpdateCount((prevCount) => {
      return {
        ...prevCount,
        completed: todo.completed ? prevCount.done + 1 : prevCount.done - 1,
        notCompleted: todo.completed
          ? prevCount.notdone - 1
          : prevCount.notdone + 1,
      };
    });
  };

  const handleDelete = () => {
    onUpdateTodolist((prevTodolist) =>
      prevTodolist.filter((item) => item.id !== todo.id),
    );
    onUpdateCount((prevCount) => ({
      completed: todo.completed
        ? prevCount.completed - 1
        : prevCount.notCompleted,
      notCompleted: todo.completed
        ? prevCount.completed
        : prevCount.notCompleted - 1,
    }));
  };

  const handleStartEdit = () => {
    setIsEditing(true);
    console.log("start edit");
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onUpdateTodolist((prevTodolist) =>
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
          checked={todo.completed}
          onClick={handleClickCheckbox}
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
        <button className="delete" onClick={handleDelete}>
          🗑️
        </button>
      </div>
    </>
  );
};
export default Todo;
