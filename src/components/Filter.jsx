import React from "react";
import { useState } from "react";

const Filter = ({ handleSearch }) => {
  const [type, setType] = useState("all");

  const changeType = (e) => {
    setType(e.target.dataset.type);
    handleSearch(type);
  };

  return (
    <div className="filter-container">
      <label htmlFor="type">
        <input
          type="radio"
          name="type"
          datatype="all"
          onChange={changeType}
          checked={true}
        />
        All
      </label>
      <label htmlFor="type">
        <input
          type="radio"
          name="type"
          datatype="series"
          onChange={changeType}
        />
        Series
      </label>
      <label htmlFor="type">
        <input
          type="radio"
          name="type"
          datatype="movies"
          onChange={changeType}
        />
        Movies
      </label>
    </div>
  );
};

export default Filter;
