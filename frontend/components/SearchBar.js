import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch, onSort = null, sortLabels }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortLabel, setSortLabel] = useState("Sort By"); // Default label

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm); // Pass the search term to the parent component
    }
  };

  const handleDropdownClick = (label) => {
    setSortLabel(label); // Update button label when item is clicked
    if (onSort) {
      onSort(label); // Pass the sort label to the parent component
    }
  };

  return (
    <div className="input-group rounded mb-4">
      {onSort && (
        <div className="btn-group shadow-0">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {sortLabel} {/* Display current sort label */}
          </button>
          <ul className="dropdown-menu">
            {sortLabel !== "Sort By" && (
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownClick("Sort By")}
                >
                  Default
                </a>
              </li>
            )}
            {sortLabels.map((label, index) => (
              <li key={index}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownClick(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleSearchClick}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
