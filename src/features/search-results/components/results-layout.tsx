"use client";
import React from "react";
import type { CarResult as CarResultType } from "@/src/features/filters/types/dto-api";
import Heading from "@/src/components/text/heading";
import ListResults from "./list-results";
import CarSelectionProvider from "../providers/car-selection";
import CarLocationsMap from "@/src/features/map/components/car-locations-map";
import Toggle from "@/src/components/toggle/toggle";
import useSearchParamsSelector from "@/src/components/hooks/use-search-params-selector";
import useSearchParamsMutation from "@/src/components/hooks/use-search-params-mutation";
import Text from "@/src/components/text/text";

type Props = {
  cars: CarResultType[];
  total: number;
};

const MAP_SEARCH_KEY = "map";

const ResultsLayout: React.FC<Props> = ({ cars, total }) => {
  const mapToggled = useSearchParamsSelector(MAP_SEARCH_KEY) === "true";
  const { setParam, deleteParam } = useSearchParamsMutation();

  const handleMapToggle = () => {
    if (mapToggled) {
      deleteParam(MAP_SEARCH_KEY);
    } else {
      setParam(MAP_SEARCH_KEY, "true");
    }
  };

  if (cars.length === 0) {
    return (
      <div>
        <Text size="lg">No cars found. Please try a different search.</Text>

        <img
          className="rounded-xl mt-4"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanAyNmxibXI1MGViYThueGk3eDl2NWFlOWtidmVpZTN0c2UzcHduMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q9asa1YwLn6b8CCSHB/giphy-downsized-large.gif"
          alt="Dude where is my car?!"
        />
      </div>
    );
  }

  return (
    <CarSelectionProvider>
      <div className="flex gap-2 items-center">
        <Heading size="lg">
          Found {total} {total === 1 ? "car" : "cars"}
        </Heading>
        <Toggle
          inputId={MAP_SEARCH_KEY}
          label={mapToggled ? "Hide map" : "Show map"}
          onToggle={handleMapToggle}
          toggled={mapToggled}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-grow basis-4/12 transition-all">
          <ListResults cars={cars} />
        </div>
        {mapToggled && (
          <div className="flex-grow basis-8/12">
            <CarLocationsMap cars={cars} />
          </div>
        )}
      </div>
    </CarSelectionProvider>
  );
};

export default ResultsLayout;
