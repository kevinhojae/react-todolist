function CountTodo({ count }) {
	return (
		<div className="box">
			<table className="count-table">
				<thead>
					<tr>
						<th>Total</th>
						<th>Not done</th>
						<th>Done</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<b>{count.done + count.notdone}</b>
						</td>
						<td>
							<b>{count.notdone}</b>
						</td>
						<td>
							<b>{count.done}</b>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CountTodo;
