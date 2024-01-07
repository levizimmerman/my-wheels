import { FuelType } from "../../filters/types/filter";

const formatFuelType = (fuelType?: string) => {
  switch (fuelType) {
    case FuelType.Electric:
      return "⚡️ Electric";
    case FuelType.Gasoline:
      return "⛽️ Gasoline";
    default:
      return "Unknown";
  }
};

export default formatFuelType;
