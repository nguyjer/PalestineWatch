import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortLabel, setSortLabel] = useState("Sort By"); // Default label

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm); // Pass the search term to the parent component
    }
  };

  const handleDropdownClick = (label) => {
    setSortLabel(label); // Update button label when item is clicked
  };

  return (
    <div className="input-group rounded mb-4">
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
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleDropdownClick("Action")}
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleDropdownClick("Something else here")}
            >
              Something else here
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleDropdownClick("Separated link")}
            >
              Separated link
            </a>
          </li>
        </ul>
      </div>
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
