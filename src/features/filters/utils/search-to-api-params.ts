import { SearchMapFilter } from "../types/dto-api";
import { FilterKey } from "../types/filter";

const stringToBoolean = (value: string) => {
  return value === "true";
};

const searchToApiParams = (searchParams?: Record<string, string>) => {
  if (!searchParams) {
    return {};
  }

  return Object.entries(searchParams).reduce(
    (acc: Partial<SearchMapFilter>, [key, value]) => {
      switch (key) {
        case FilterKey.Availability:
          return { ...acc, onlyAvailable: stringToBoolean(value) };
        case FilterKey.FuelType:
          return { ...acc, fuelType: value };
        case FilterKey.TowBar:
          return { ...acc, towbar: stringToBoolean(value) };
        case FilterKey.WinterTires:
          return { ...acc, winterTires: stringToBoolean(value) };
        case FilterKey.Model:
          return { ...acc, models: [value] };
        default:
          return acc;
      }
    },
    {},
  );
};

export default searchToApiParams;
