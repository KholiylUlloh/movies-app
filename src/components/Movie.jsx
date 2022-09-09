import React from "react";
import "../App.css";

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="card" key={imdbID}>
      <div
        className="imgWrap"
        style={{
          backgroundImage: `url(${Poster})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="cardContent">
        <h2 className="movieTitle">Name: {Title}</h2>
        <p className="movieYear">Year: {Year}</p>
        <p className="movieType">Genre: {Type}</p>
      </div>
    </div>
  );
};

export default Movie;
