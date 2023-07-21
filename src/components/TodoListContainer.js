import { useEffect, useState } from "react";
import FilterContainer from "./FilterContainer";
import { FILTER_OPTION } from "../App";
import TodoList from "./TodoList";
import CountTodo from "./CountTodo";

export default function TodoListContainer({
  todoList,
  todoCount,
  onUpdateTodolist,
  onUpdateCount,
}) {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTION.ALL);
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  useEffect(() => {
    setFilteredTodoList(
      todoList.filter((todo) => {
        if (selectedFilter === FILTER_OPTION.NOT_DONE) {
          return todo.completed === false;
        }
        if (selectedFilter === FILTER_OPTION.COMPLETED) {
          return todo.completed === true;
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
        onUpdateTodolist={onUpdateTodolist}
        onUpdateCount={onUpdateCount}
      />
      <CountTodo count={todoCount} />
    </div>
  );
}
