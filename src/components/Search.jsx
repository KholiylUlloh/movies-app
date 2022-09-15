import React, { useState } from "react";
import Filter from "./Filter";

const Search = ({ searchData }) => {
  const [search, setSearch] = useState("all");

  const handleSearch = (e, type) => {
    searchData(search, type);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          className="search-input"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Filter handleSearch={handleSearch} />
    </div>
  );
};

export default Search;
