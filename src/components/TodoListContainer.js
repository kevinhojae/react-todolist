import { useEffect, useState } from "react";
import FilterButtonRow from "./FilterButtonRow";
import { FILTER_OPTION } from "../App";
import TodoList from "./TodoList";

export default function TodoListContainer({ todoList }) {
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
      })
    );
  }, [selectedFilter, todoList]);

  return (
    <div>
      <FilterButtonRow
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />
      <TodoList todos={filteredTodoList} />
    </div>
  );
}
