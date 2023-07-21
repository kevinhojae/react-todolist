const CountTodo = ({ count }) => {
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
              <b>{count.completed + count.notCompleted}</b>
            </td>
            <td>
              <b>{count.notCompleted}</b>
            </td>
            <td>
              <b>{count.completed}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountTodo;
