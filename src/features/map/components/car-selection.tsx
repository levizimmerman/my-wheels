import React from "react";

import { useMap } from "react-leaflet";
import { CarSelectionDataContext } from "../../search-results/providers/car-selection";

const CarSelection: React.FC = () => {
  const map = useMap();
  const carSelection = React.useContext(CarSelectionDataContext);

  React.useEffect(() => {
    if (carSelection) {
      map.setView(
        [carSelection.coords.latitude, carSelection.coords.longitude],
        map.getZoom(),
      );
    }
  }, [carSelection]);

  return null;
};

export default CarSelection;
