import React, { useReducer, useState } from "react";

import logo from "./assets/logo.svg";
import "./style/App.css";
import CreateTodo from "./components/CreateTodo";
import FilterButtonRow from "./components/FilterButtonRow";
import TodoList from "./components/TodoList";
import CountTodo from "./components/CountTodo";

function reducer(state, action) {
	switch (action.type) {
		case "CREATE":
			return {
				...state,
				todos: state.todos.concat({
					id: action.id,
					text: action.text,
					isChecked: action.isChecked,
				}),
				count: {
					...state.count,
					notdone: state.count.notdone + 1,
				},
			};
		case "SAVE-EDIT":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id
						? { ...todo, text: action.text }
						: todo
				),
			};
		case "DELETE":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
				count: {
					done: action.isChecked
						? state.count.done - 1
						: state.count.done,
					notdone: action.isChecked
						? state.count.notdone
						: state.count.notdone - 1,
				},
			};
		case "CLICK-CHECKBOX":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id
						? { ...todo, isChecked: action.isChecked }
						: todo
				),
				count: {
					done: action.isChecked
						? state.count.done + 1
						: state.count.done - 1,
					notdone: action.isChecked
						? state.count.notdone - 1
						: state.count.notdone + 1,
				},
			};
		default:
			return state;
	}
}

export const UserDispatch = React.createContext(null);

function App() {
	const [state, dispatch] = useReducer(reducer, {
		todos: [],
		count: { done: 0, notdone: 0 },
	});
	const { todos, count } = state;
	const filterOption = ["all", "not done", "done"];
	const [selectedFilter, setSelectedFilter] = useState("all");

	return (
		<UserDispatch.Provider value={dispatch}>
			<div
				className="header"
				style={{ display: "flex", alignItems: "center" }}
			>
				<img
					src={logo}
					className="App-logo"
					alt="logo"
					style={{ width: "50px", height: "50px" }}
				/>
				<h1 className="title">ToDo List</h1>
			</div>
			<CreateTodo />
			<FilterButtonRow
				filterOption={filterOption}
				selectedFilter={selectedFilter}
				onSelectFilter={setSelectedFilter}
			/>
			<TodoList todos={todos} selectedFilter={selectedFilter} />
			<CountTodo count={count} />
		</UserDispatch.Provider>
	);
}

export default App;
