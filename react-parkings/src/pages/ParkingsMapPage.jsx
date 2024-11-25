import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { fetchParkings } from "../api";

const ParkingsMapPage = () => {
  const { data, error, isLoading, isError, dataUpdatedAt } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    refetchInterval: 5 * 60 * 1000,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MapContainer className="flex-grow" zoom={15} center={[51.053, 3.719]}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.data.results.map((p) => (
          <Marker key={p.id} position={[p.location.lat, p.location.lon]} />
        ))}
      </MapContainer>
    </div>
  );
};

export default ParkingsMapPage;
