import { CompletedTodoCount } from "../model/todo";

export default class TodoListService {
  addTodo(todo, setTodoList) {
    setTodoList((prev) => prev.concat(todo));
  }

  // Q. remove, update, complete도 마찬가지로 메소드가 실행될 때 화면이 업데이트 되어야 하므로 return this가 아닌 setTodoList를 받아야 하지 않나요?
  removeTodo(todoList, id, setTodoList) {
    if (todoList.find((todo) => todo.id === id).isCompleted) {
      CompletedTodoCount.num--;
    }
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  updateTodo(todoList, id, task, setTodoList) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? todo.updateTodo(task) : todo)),
    );
  }

  completeTodo(todoList, id, setTodoList) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          if (todo.isCompleted) {
            CompletedTodoCount.num--;
          } else {
            CompletedTodoCount.num++;
          }
          return todo.toggleComplete();
        } else {
          return todo;
        }
      }),
    );
  }

  editTodo(todoList, id, setTodoList) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? todo.toggleEdit() : todo)),
    );
  }

  // filterTodoList(todoList, selectedFilter, setFilteredTodoList) {
  //   setFilteredTodoList(
  //     todoList.filter((todo) => {
  //       if (selectedFilter === "미완료") {
  //         return todo.isCompleted === false;
  //       }
  //       if (selectedFilter === "완료") {
  //         return todo.isCompleted === true;
  //       }

  //       return todo;
  //     }),
  //   );
  // }
}
