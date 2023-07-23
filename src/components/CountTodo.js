import { useContext } from "react";
import { CompletedTodoCount } from "../model/todo";
import { TodoContext } from "../App";

const CountTodo = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <div className="box">
      <table className="count-table">
        <thead>
          <tr>
            <th>Total</th>
            <th>Not completed</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>{todoList.length}</b>
            </td>
            <td>
              <b>{todoList.length - CompletedTodoCount.num}</b>
            </td>
            <td>
              <b>{CompletedTodoCount.num}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountTodo;
