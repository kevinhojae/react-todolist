import Todo from "./TodoItem";

function TodoList({ todos, onUpdateTodolist, onUpdateCount }) {
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
          onUpdateTodolist={onUpdateTodolist}
          onUpdateCount={onUpdateCount}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
