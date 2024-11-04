import React from "react";

// Statische image importeren
import duneImg from "../assets/dune_poster.jpg";

import {
  MdFavorite,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

const Movie = ({ movie }) => {
  // Hook om te kunnen navigeren in JS code -> useNavigate();

  const navigate = useNavigate();

  const { favorites, toggleFavorite } = useFavorites();

  const isInFavorite = favorites.some((f) => f.id === movie.id);

  return (
    <div
      className="relative shadow-lg rounded-xl overflow-clip cursor-pointer transition duration-500 hover:scale-105"
      onClick={() => {
        navigate(`/details/${movie.id}`);
      }}>
      {/* Statische image */}
      {/* <img src={duneImg} /> */}

      <button
        className={`absolute top-4 right-4 rounded-full p-2 text-2xl text-white ${
          isInFavorite ? "bg-red-600" : "bg-emerald-700"
        }`}
        onClick={(event) => {
          toggleFavorite(movie);
          event.stopPropagation();
        }}>
        {isInFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>

      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url).href}
      />
      <div className="min-h-36 p-2">
        <p className="font-bold text-center">{movie.title}</p>
        <p>{movie.genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default Movie;
