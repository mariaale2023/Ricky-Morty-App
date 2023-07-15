import React from "react";

import "./Search.css";

const Search = ({ setSearch, setPageNumber, setSearchByStatus }) => {
  const onChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
    // setSearchByStatus(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="d-flex justify-content-center mt-5">
        <input
          onChange={onChange}
          type="text"
          className="search-input"
          name="search"
          placeholder="Search characters"
        />
        <button onClick={handleBtn} className="btn btn-success">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
