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
    // Q. onUpdateTodolist, onUpdateCount로 상태를 두 번 바꿔주게 되면, 두 번 렌더링 되는 것은 아닌지?
    onUpdateTodolist((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...prevTodo, isCompleted: !todo.isCompleted }
          : prevTodo,
      ),
    );
    onUpdateCount((prevCount) => {
      return {
        ...prevCount,
        completed: todo.isCompleted
          ? prevCount.completed - 1
          : prevCount.completed + 1,
        notCompleted: todo.isCompleted
          ? prevCount.notCompleted + 1
          : prevCount.notCompleted - 1,
      };
    });
  };

  const handleDelete = () => {
    onUpdateTodolist((prevTodolist) =>
      prevTodolist.filter((item) => item.id !== todo.id),
    );
    onUpdateCount((prevCount) => ({
      completed: todo.isCompleted
        ? prevCount.completed - 1
        : prevCount.notCompleted,
      notCompleted: todo.isCompleted
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
          checked={todo.isCompleted}
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
