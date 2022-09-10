import React, { useState } from "react";

const Search = ({ searchData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchData(search);
    }
  };
  return (
    <div>
      <input
        className="search-input"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default Search;
