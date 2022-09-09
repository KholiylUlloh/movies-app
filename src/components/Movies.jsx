import React from "react";
import Movie from "./Movie";
import "../App.css";

const Movies = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default Movies;
