import React from "react";

// Statische image importeren
import duneImg from "../assets/dune_poster.jpg";

import { MdFavorite, MdOutlineFavorite } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  // Hook om te kunnen navigeren in JS code -> useNavigate();

  const navigate = useNavigate();

  // TODO: Context aanmaken om favorieten bij te houden
  const favorites = [];

  return (
    <div
      className="relative shadow-lg rounded-xl overflow-clip cursor-pointer transition duration-500 hover:scale-105"
      onClick={() => {
        navigate(`/details/${movie.id}`);
      }}>
      {/* Statische image */}
      {/* <img src={duneImg} /> */}

      <button
        className="absolute top-4 right-4 rounded-full p-2 text-2xl text-white bg-emerald-600"
        onClick={(event) => {
          favorites.push(movie);
          console.log(favorites);
          event.stopPropagation();
        }}>
        <MdOutlineFavorite />
      </button>

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
