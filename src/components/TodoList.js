import Todo from "./TodoItem";

function TodoList({ todos, selectedFilter }) {
	return (
		<div className="box">
			{todos.length !== 0 ? (
				todos.map((todo) => {
					if (selectedFilter === "all") {
						return <Todo todo={todo} key={todo.id} />;
					} else if (selectedFilter === "not done") {
						return !todo.isChecked ? (
							<Todo todo={todo} key={todo.id} />
						) : null;
					} else {
						return todo.isChecked ? (
							<Todo todo={todo} key={todo.id} />
						) : null;
					}
				})
			) : (
				<p className="empty-text">Well done!</p>
			)}
		</div>
	);
}

export default TodoList;
