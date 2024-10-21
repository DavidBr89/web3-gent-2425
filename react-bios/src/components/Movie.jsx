import React from "react";

// Statische image importeren
import duneImg from "../assets/dune_poster.jpg";

const Movie = ({ movie }) => {
  return (
    <div className="shadow-lg rounded-xl overflow-clip">
      {/* Statische image */}
      {/* <img src={duneImg} /> */}
      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url).href}
      />
      <div className=" min-h-36">
        <p className="font-bold text-center">{movie.title}</p>
        <p>{movie.genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default Movie;
