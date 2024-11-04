import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import Movie from "../components/Movie";

const FavoritesPage = () => {
  // Context gebruiken
  const { favorites } = useFavorites();

  return (
    <div>
      {favorites.map((f) => (
        <Movie key={f.id} movie={f} />
      ))}
    </div>
  );
};

export default FavoritesPage;
