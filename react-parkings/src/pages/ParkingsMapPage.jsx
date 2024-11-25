import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const ParkingsMapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MapContainer className="flex-grow" zoom={15} center={[51.053, 3.719]}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lon]} />
      </MapContainer>
    </div>
  );
};

export default ParkingsMapPage;
