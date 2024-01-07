import React from "react";
import type { CarResult as CarResultType } from "@/src/features/filters/types/dto-api";
import { CarResultSelectable } from "@/src/features/car/components/car-result";

type Props = {
  cars: CarResultType[];
};

const ListResults: React.FC<Props> = ({ cars }) => {
  return (
    <div className="flex flex-col gap-3">
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
          <CarResultSelectable
            availability={availability}
            brand={brand}
            city={city}
            fuelType={fuelType}
            hourRate={price.hourRate}
            key={registrationPlate}
            latitude={latitude}
            location={location}
            longitude={longitude}
            model={model}
            registrationPlate={registrationPlate}
            streetNumber={streetNumber}
          />
        );
      })}
    </div>
  );
};

export default ListResults;
