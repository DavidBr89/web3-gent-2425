import React from "react";

// Statische image importeren
import duneImg from "../assets/dune_poster.jpg";

const Movie = ({ movie }) => {
  return (
    <div>
      {/* Statische image */}
      {/* <img src={duneImg} /> */}
      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url).href}
      />
      <p>{movie.title}</p>
    </div>
  );
};

export default Movie;
