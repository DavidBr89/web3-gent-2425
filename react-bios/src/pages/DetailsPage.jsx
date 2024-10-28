import React from "react";
import { useParams } from "react-router-dom";

import movies from "../utils/films.json";

const DetailsPage = (props) => {
  console.log("DETAILS: ", props);

  //   ID komt vanuit de parameters
  const { id } = useParams();

  const foundMovie = movies.find((m) => m.id === Number.parseInt(id));

  if (!foundMovie) {
    return <p>Geen film gevonden!</p>;
  }

  return (
    <div>
      <h1>{foundMovie.title}</h1>
    </div>
  );
};

export default DetailsPage;
