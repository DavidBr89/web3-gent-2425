import React from "react";

import movies from "../utils/films.json";
import Movie from "./Movie";

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 my-4 justify-items-center">
      {movies.map((m) => {
        return <Movie key={m.id} movie={m} />;
      })}
    </div>
  );
};

export default Movies;
