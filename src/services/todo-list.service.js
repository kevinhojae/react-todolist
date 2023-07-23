export default class TodoListService {
  addTodo(todo, setTodoList) {
    setTodoList((prev) => prev.concat(todo));
  }

  // Q. remove, update, complete도 마찬가지로 메소드가 실행될 때 화면이 업데이트 되어야 하므로 return this가 아닌 setTodoList를 받아야 하지 않나요?
  removeTodo(todoList, id, setTodoList) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  updateTodo(todoList, id, task, setTodoList) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? todo.updateTodo(task) : todo)),
    );
  }

  completeTodo(todoList, id, setTodoList) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? todo.toggleComplete() : todo)),
    );
  }

  editTodo(todoList, id, setTodoList) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? todo.toggleEdit() : todo)),
    );
  }
}
