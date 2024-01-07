"use client";

import React from "react";
import Leaflet from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import CarResult from "@/src/features/car/components/car-result";
import {
  CarSelectionApiContext,
  CarSelectionDataContext,
} from "@/src/features/search-results/providers/car-selection";
import "./car-marker.css";

type Props = {
  availability: string;
  brand?: string;
  city?: string;
  fuelType?: string;
  hourRate: string;
  key?: string;
  latitude: number;
  location?: string;
  longitude: number;
  model?: string;
  registrationPlate: string;
  streetNumber?: string;
};

const MarkerIcon = Leaflet.icon({
  iconUrl: "leaflet/images/marker-icon.png",
  iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
  shadowUrl: "leaflet/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CarMarker: React.FC<Props> = ({
  availability,
  brand,
  city,
  fuelType,
  hourRate,
  latitude,
  location,
  longitude,
  model,
  registrationPlate,
  streetNumber,
}) => {
  const carSelection = React.useContext(CarSelectionDataContext);
  const { clearCarSelection, setCarSelection } = React.useContext(
    CarSelectionApiContext,
  );
  const map = useMap();
  const popupRef = React.useRef<Leaflet.Popup>(null);
  const markerRef = React.useRef<Leaflet.Marker>(null);
  const selected =
    carSelection && carSelection.registrationPlate === registrationPlate;

  const handlePopupClose = () => {
    clearCarSelection();
  };

  const handlePopupOpen = () => {
    setCarSelection({ registrationPlate, coords: { latitude, longitude } });
  };

  React.useEffect(() => {
    // Current car is selected
    if (selected) {
      // Get car in the center of the map
      map.flyTo(
        [carSelection.coords.latitude, carSelection.coords.longitude],
        map.getZoom(),
      );
      // Open popup
      popupRef.current?.openOn(map);
    }
  }, [carSelection]);

  return (
    <Marker
      position={{
        lat: latitude,
        lng: longitude,
      }}
      icon={MarkerIcon}
      ref={markerRef}
      interactive
      eventHandlers={{
        popupclose: handlePopupClose,
        popupopen: handlePopupOpen,
      }}
    >
      <Popup ref={popupRef}>
        <CarResult
          availability={availability}
          brand={brand}
          city={city}
          fuelType={fuelType}
          hourRate={hourRate}
          key={registrationPlate}
          location={location}
          model={model}
          streetNumber={streetNumber}
        />
      </Popup>
    </Marker>
  );
};

export default CarMarker;
