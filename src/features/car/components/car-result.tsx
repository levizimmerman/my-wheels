import React from "react";
import Card from "@/src/components/card/card";
import CarName from "./car-name";
import CarAddress from "./car-address";
import CarFuelType from "./car-fuel-type";
import CarAvailability from "./car-availability";
import CarRate from "./car-rate";
import {
  CarSelectionApiContext,
  CarSelectionDataContext,
} from "@/src/features/search-results/providers/car-selection";

type Props = {
  availability: string;
  brand?: string;
  city?: string;
  fuelType?: string;
  hourRate: string;
  location?: string;
  model?: string;
  streetNumber?: string;
  selected?: boolean;
  reactOnHover?: boolean;
};

const CarResult: React.FC<Props> = ({
  availability,
  brand,
  city,
  fuelType,
  hourRate,
  location,
  model,
  reactOnHover,
  selected,
  streetNumber,
}) => {
  return (
    <Card
      renderAs="article"
      backgroundColor={selected ? "selected" : undefined}
      backgroundColorHover={reactOnHover ? "selection" : undefined}
    >
      <div className="p-6">
        <div className="flex gap-4">
          <div>
            <CarRate rate={hourRate} selected={selected} />
          </div>
          <div>
            <CarAddress
              city={city}
              location={location}
              streetNumber={streetNumber}
            />
            <CarName brand={brand} model={model} />
            <CarFuelType fuelType={fuelType} />
            <CarAvailability availability={availability} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export const CarResultSelectable: React.FC<
  Props & {
    registrationPlate: string;
    latitude: number;
    longitude: number;
  }
> = (props) => {
  const carSelection = React.useContext(CarSelectionDataContext);
  const { clearCarSelection, setCarSelection } = React.useContext(
    CarSelectionApiContext,
  );
  const selected = carSelection?.registrationPlate === props.registrationPlate;
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (selected) {
      clearCarSelection();
    } else {
      setCarSelection({
        registrationPlate: props.registrationPlate,
        coords: { latitude: props.latitude, longitude: props.longitude },
      });
    }
  };

  React.useEffect(() => {
    if (carSelection?.registrationPlate === props.registrationPlate) {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [carSelection?.registrationPlate]);

  return (
    <div role="button" onClick={handleClick} ref={divRef}>
      <CarResult {...props} reactOnHover selected={selected} />
    </div>
  );
};

export default CarResult;
