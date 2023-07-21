export default class TodoListService {
  addTodo(todo, setTodoList) {
    setTodoList((prev) => prev.concat(todo));
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter((todo) => todo.id === id);
  }

  updateTodo(id, task) {
    const todo = this.todoList.find((todo) => todo.id === id);
    todo.updateTodo(task);
    return this.todoList;
  }

  completeTodo(id) {
    const todo = this.todoList.find((todo) => todo.id === id);
    todo.toggleComplete();
    return this.todoList;
  }
}
