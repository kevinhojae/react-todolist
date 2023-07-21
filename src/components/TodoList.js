import Todo from "./TodoItem";

const TodoList = ({ todos, onCompleteTodo, updateTodolist }) => {
  // ClickCheckbox와 Delete는 필터링된 리스트 내에서 일어나는 일이므로, TodoList에서 관리

  const handleDelete = (selectedTodo) => {
    updateTodolist((prevTodolist) =>
      prevTodolist.filter((item) => item.id !== selectedTodo.id)
    );
  };

  // Early Return
  if (todos.length === 0) {
    return (
      <div className="box">
        <p className="empty-text">Well done!</p>
      </div>
    );
  }

  return (
    <div className="box">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          onComplete={onCompleteTodo}
          onDelete={handleDelete}
          updateTodolist={updateTodolist}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
