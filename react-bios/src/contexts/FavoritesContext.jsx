import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    // Als de film er al in staat

    if (favorites.some((f) => f.id === movie.id)) {
      setFavorites(favorites.filter((f) => f.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites: favorites, toggleFavorite: toggleFavorite }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

export const useFavorites = () => useContext(FavoritesContext);
