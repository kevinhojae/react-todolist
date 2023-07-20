import Todo from "./TodoItem";

function TodoList({ todos }) {
  // Early Return
  if (todos.length === 0) {
    return (
      <div>
        <p className="empty-text">Well done!</p>
      </div>
    );
  }

  return (
    <div className="box">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
