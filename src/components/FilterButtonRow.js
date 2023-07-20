function FilterButtonRow({ filterOption, selectedFilter, onSelectFilter }) {
	return (
		<div>
			{filterOption.map((filter) => {
				return (
					<button
						className="filter-button"
						onClick={() => onSelectFilter(filter)}
						style={{
							backgroundColor:
								selectedFilter === filter
									? "#CCDCFF"
									: "initial",
						}}
					>
						{filter}
					</button>
				);
			})}
		</div>
	);
}

export default FilterButtonRow;
