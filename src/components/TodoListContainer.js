import { useEffect, useState } from "react";
import FilterContainer from "./FilterContainer";
import { FILTER_OPTION } from "../App";
import TodoList from "./TodoList";
import CountTodo from "./CountTodo";

const TodoListContainer = ({
  todoList,
  todoCount,
  updateTodolist,
  updateCount,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTION.ALL);
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

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
      }),
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
        updateCount={updateCount}
      />
      <CountTodo count={todoCount} />
    </div>
  );
};

export default TodoListContainer;
