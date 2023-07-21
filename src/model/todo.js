export default class Todo {
  static id = 0;

  constructor(task) {
    this.id = Todo.id;
    this.task = task;
    this.isCompleted = false;

    Todo.id++;

    return this;
  }

  updateTodo(task) {
    this.task = task;
    return this;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
    return this;
  }
}
