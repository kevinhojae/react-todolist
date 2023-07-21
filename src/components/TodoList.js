import Todo from "./TodoItem";

const TodoList = ({ todos, updateTodolist, updateCount }) => {
  // ClickCheckbox와 Delete는 필터링된 리스트 내에서 일어나는 일이므로, TodoList에서 관리
  const handleClickCheckbox = (selectedTodo) => {
    // Q. onUpdateTodolist, onUpdateCount로 상태를 두 번 바꿔주게 되면, 두 번 렌더링 되는 것은 아닌지?
    updateTodolist((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === selectedTodo.id
          ? { ...prevTodo, isCompleted: !selectedTodo.isCompleted }
          : prevTodo,
      ),
    );
    updateCount((prevCount) => ({
      ...prevCount,
      completed: selectedTodo.isCompleted
        ? prevCount.completed - 1
        : prevCount.completed + 1,
      notCompleted: selectedTodo.isCompleted
        ? prevCount.notCompleted + 1
        : prevCount.notCompleted - 1,
    }));
  };

  const handleDelete = (selectedTodo) => {
    updateTodolist((prevTodolist) =>
      prevTodolist.filter((item) => item.id !== selectedTodo.id),
    );
    updateCount((prevCount) => ({
      completed: selectedTodo.isCompleted
        ? prevCount.completed - 1
        : prevCount.completed,
      notCompleted: selectedTodo.isCompleted
        ? prevCount.notCompleted
        : prevCount.notCompleted - 1,
    }));
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
          onClickCheckbox={handleClickCheckbox}
          onDelete={handleDelete}
          updateTodolist={updateTodolist}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
