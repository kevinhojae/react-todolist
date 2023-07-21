import { useEffect, useState } from "react";
import FilterContainer from "./FilterContainer";
import { FILTER_OPTION } from "../App";
import TodoList from "./TodoList";

const TodoListContainer = ({ todoList, updateTodolist, updateCount }) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTION.ALL);
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  const onCompleteTodo = (selectedTodo) => {
    // Q. onUpdateTodolist, onUpdateCount로 상태를 두 번 바꿔주게 되면, 두 번 렌더링 되는 것은 아닌지?
    updateTodolist((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === selectedTodo.id
          ? { ...prevTodo, isCompleted: !selectedTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    setFilteredTodoList(
      todoList.filter((todo) => {
        if (selectedFilter === FILTER_OPTION.NOT_COMPLETED) {
          return todo.isCompleted === false;
        }
        if (selectedFilter === FILTER_OPTION.COMPLETED) {
          return todo.isCompleted === true;
        }

        return todo;
      })
    );
  }, [selectedFilter, todoList]);

  return (
    <div>
      <FilterContainer
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />
      <TodoList
        todos={filteredTodoList}
        updateTodolist={updateTodolist}
        onCompleteTodo={onCompleteTodo}
      />
    </div>
  );
};

export default TodoListContainer;
