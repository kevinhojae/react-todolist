export default class Todo {
  static id = 0;

  constructor(task) {
    this.id = Todo.id;
    this.task = task;
    this.isCompleted = false;
    this.isEditing = false;

    Todo.id++;

    return this;
  }

  getIsEditing(){
    return this.isEditing;
  }
  

  updateTodo(task) {
    this.task = task;
    return this;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
    return this;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    return this;
  }
}
