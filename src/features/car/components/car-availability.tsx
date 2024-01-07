import React from "react";

import Text from "@/src/components/text/text";

type Props = {
  availability: string;
};

const CarAvailability: React.FC<Props> = ({ availability }) => {
  return <Text>{availability}</Text>;
};

export default CarAvailability;
