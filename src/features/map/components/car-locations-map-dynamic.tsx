"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { CarResult as CarResultType } from "@/src/features/filters/types/dto-api";
import CurrentLocation from "./current-location";
import CarMarker from "./car-marker";

type Props = {
  cars: CarResultType[];
};

const CarLocationsMap: React.FC<Props> = ({ cars }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom
      className="w-full h-dvh"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cars.map(({ resource, availability }) => {
        const {
          registrationPlate,
          model,
          brand,
          location,
          streetNumber,
          city,
          fuelType,
          price,
          latitude,
          longitude,
        } = resource;
        return (
          <CarMarker
            key={registrationPlate}
            availability={availability}
            brand={brand}
            city={city}
            fuelType={fuelType}
            hourRate={price.hourRate}
            latitude={latitude}
            location={location}
            longitude={longitude}
            model={model}
            registrationPlate={registrationPlate}
            streetNumber={streetNumber}
          />
        );
      })}
      <CurrentLocation />
    </MapContainer>
  );
};

export default CarLocationsMap;
