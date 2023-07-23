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
  const { todoList } = useContext(TodoContext);
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTION.ALL);
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  useEffect(() => {
    // Q. filter도 logic으로 생각할 수 있는데, Service에 포함시키는 것이 맞을지?
    // 그런데, Service에 포함시키기 위해서는 TodoListService가 여기까지 prop으로 전달되어야 함. (filteredTodoList를 setFilteredTodoList로 업데이트 하기 위해서)
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
