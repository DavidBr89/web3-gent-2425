import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";

const FavoritesPage = () => {
  // Context gebruiken
  const { favorites } = useFavorites();

  return (
    <div>
      {favorites.map((f) => (
        <p key={f.id}>{f.title}</p>
      ))}
    </div>
  );
};

export default FavoritesPage;
