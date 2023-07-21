import { FILTER_OPTION } from "../App";
function FilterContainer({ selectedFilter, onSelectFilter }) {
  const filterOption = [
    FILTER_OPTION.ALL,
    FILTER_OPTION.COMPLETED,
    FILTER_OPTION.NOT_DONE,
  ];

  return (
    <div>
      {filterOption.map((filter) => {
        return (
          <button
            key={filter}
            className="filter-button"
            onClick={() => onSelectFilter(filter)}
            style={{
              backgroundColor:
                selectedFilter === filter ? "#CCDCFF" : "initial",
            }}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default FilterContainer;
