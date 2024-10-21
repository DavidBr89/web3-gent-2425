import React from "react";

import movies from "../utils/films.json";
import Movie from "./Movie";

const Movies = () => {
  return (
    <div>
      {movies.map((m) => {
        return <Movie key={m.id} movie={m} />;
      })}
    </div>
  );
};

export default Movies;
