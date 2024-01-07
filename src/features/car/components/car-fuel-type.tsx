import React from "react";

import Text from "@/src/components/text/text";
import formatFuelType from "../utils/format-fuel-type";
import { FuelType } from "../../filters/types/filter";

type Props = {
  fuelType?: string;
};

const CarFuelType: React.FC<Props> = ({ fuelType }) => {
  if (!fuelType) {
    return null;
  }
  return (
    <Text color="muted" size="sm">
      {formatFuelType(fuelType)}
    </Text>
  );
};

export default CarFuelType;
