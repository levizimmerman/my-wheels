import React from "react";
import { useMap } from "react-leaflet";

const CurrentLocation: React.FC = () => {
  const map = useMap();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      map.setView([data.coords.latitude, data.coords.longitude], map.getZoom());
    });
  }, []);

  return null;
};

export default CurrentLocation;
