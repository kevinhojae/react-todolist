import { useContext, useEffect, useState } from "react";
import FilterContainer from "./FilterContainer";
import { FILTER_OPTION } from "../App";
import TodoList from "./TodoList";
import { TodoContext } from "../App";

const TodoListContainer = ({
  updateTodo,
  removeTodo,
  completeTodo,
  editTodo,

  // updateCount,
}) => {
  const  todoList  = useContext(TodoContext);
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
        filteredTodoList={filteredTodoList}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoListContainer;
