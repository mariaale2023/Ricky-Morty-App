import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <>
      <form className="d-flex justify-content-center mt-5">
        <input
          type="text"
          className="search-imput"
          name="search"
          placeholder="Search characters"
        />
        <button className="btn btn-success">Search</button>
      </form>
    </>
  );
};

export default Search;
