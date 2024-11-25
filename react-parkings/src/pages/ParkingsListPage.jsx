import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchParkings } from "../api";

const ParkingsListPage = () => {
  const { data, error, isLoading, isError, dataUpdatedAt } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    refetchInterval: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      {data.data.results.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <p>
            {p.availablecapacity} / {p.totalcapacity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParkingsListPage;
